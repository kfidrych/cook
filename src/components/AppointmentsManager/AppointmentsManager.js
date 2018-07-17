import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';
import './AppointmentsManager.css';

import withAuthorization from '../../components/Session/withAuthorization';

const AppointmentManagerPage = ({ history }) =>
  <div>
    <h1>Appointments Manager</h1>
    <CreateAppointmentForm history={history} />
    <AppointmentListTable />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  date: "",
  time: "",
  classTitle: "",
  user: ""
};

class CreateAppointmentForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
        date,
        time,
        classTitle,
        user
    } = this.state;

    const {
      history,
    } = this.props;

    db.doCreateAppointment(date, time, classTitle, user)
      .then(createAppointment => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateAppointment(createAppointment.appointment.id, date, classTitle, user)
          .then(() => {
            this.setState(() => ({ 
                date: "",
                time: "",
                classTitle: "",
                user: ""
              // INITIAL_STATE }));
            }));
            history.push(routes.APPOINTMENTMANAGER);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  // componentDidMount() {
  //   db.ref("classes").on('value', (snapshot) => {
  //     let classes = snapshot.val();
  //     let newState = [];
  //     for (let class in classes) {
  //       newState.push({
  //         id: class,
  //         title: classes[class].title
  //       })
  //     }
  //   })
  // }

  render() {
    const {
        date,
        time,
        classTitle,
        user
    } = this.state;

    const isInvalid =
      date === '' ||
      time === '' ||
      classTitle === '' ||
      user === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={date}
          onChange={event => this.setState(updateByPropertyName('date', event.target.value))}
          type="date"
          placeholder="Appointment Date"
        />
        <input
          value={time}
          onChange={event => this.setState(updateByPropertyName('time', event.target.value))}
          type="time"
          placeholder="Appointment Time"
        />
        <input
          value={classTitle}
          onChange={event => this.setState(updateByPropertyName('classTitle', event.target.value))}
          type="text"
          placeholder="Class Title"
        />
        <input
          value={user}
          onChange={event => this.setState(updateByPropertyName('user', event.target.value))}
          type="text"
          placeholder="Customer Name"
        />
        <button disabled={isInvalid} type="submit">
          Create Appointment
        </button>
      </form>
    );
  }
}

class AppointmentListTable extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      appointments: {}
    };
  }

  componentDidMount() {
    db.onceGetAppointments().then(snapshot =>
      this.setState(() => ({ appointments: snapshot.val() }))
    );
  }

  render() {
    const { appointments } = this.state;
    
    return (
      <div>
        { !!appointments && <AppointmentList appointments={appointments} /> }
      </div>      
    );
  }
}


const AppointmentList = ({ appointments }) =>
  
  <div className="container">
    <h2>Current Appointments</h2>            
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Class Title</th>
          <th>Customer Name</th>
          <th>Remove Appointment</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(appointments).map(key =>
          <tr>
            <td key={key}>{appointments[key].date}</td>
            <td key={key}>{appointments[key].time}</td>
            <td key={key}>{appointments[key].classTitle}</td>
            <td key={key}>{appointments[key].user}</td>
            <td key={key}><button type="button" className="close" onClick={() => db.doDeleteAppointment(key)}>Delete</button></td>
            {/* Add Edit functionality */}
          </tr>
        )}
      </tbody>
    </table>
  </div>

// const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(AdminSchedule);

export default withRouter(AppointmentManagerPage);

export {
  CreateAppointmentForm,
  AppointmentListTable
};