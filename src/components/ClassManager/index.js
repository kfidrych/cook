import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';
import './ClassManager.css';
import AdminNav from "../../components/AdminNav";

const ClassManagerPage = ({ history }) =>
  <div>
    <h1>Class Manager</h1>
    <CreateClassForm history={history} />
    <ClassListTable />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  title: "",
  category: "",
  description: "",
  price: ""
};

class CreateClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      title,
      category,
      price,
      description
    } = this.state;

    const {
      history,
    } = this.props;

    db.doCreateClass(title, category, price, description)
      .then(createClass => {

        console.log(createClass);

        // Create a user in your own accessible Firebase Database too
        db.doCreateClass(createClass.class.id, title, category, description, price)
          .then(() => {
            this.setState(() => ({ 
              title: "",
              category: "",
              price: "",
              description: ""
              // INITIAL_STATE }));
            }));
            history.push(routes.CLASSMANAGER);
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
      title,
      category,
      price,
      description
    } = this.state;

    const isInvalid =
      title === '' ||
      category === '' ||
      price === '' ||
      description === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={title}
          onChange={event => this.setState(updateByPropertyName('title', event.target.value))}
          type="text"
          placeholder="Class Title"
        />
        <select id="dropdown" value={category} onChange={event => this.setState(updateByPropertyName('category', event.target.value))}>
          <option value="" disabled selected style={{display: 'none'}}>Select Category</option>
          <option value="A La Carte">A La Carte</option>
          <option value="Package">Package</option>
        </select>
        <input
          value={description}
          onChange={event => this.setState(updateByPropertyName('description', event.target.value))}
          type="text"
          placeholder="Class Description"
        />
        <input
          value={price}
          onChange={event => this.setState(updateByPropertyName('price', event.target.value))}
          type="number"
          placeholder="$ Price"
        />
        <button disabled={isInvalid} type="submit">
          Create Class
        </button>
      </form>
    );
  }
}

class ClassListTable extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      classes: {}
    };
  }

  componentDidMount() {
    db.onceGetClasses().then(snapshot =>
      this.setState(() => ({ classes: snapshot.val() }))
    );
  }

  render() {
    const { classes } = this.state;
    
    return (
      <div>
        { !!classes && <ClassList classes={classes} /> }
      </div>      
    );
  }
}


const ClassList = ({ classes }) =>
  
  <div className="container">
    <h2>Current Classes Offered</h2>            
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Class Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Description</th>
          <th>Remove Class</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(classes).map(key =>
          <tr>
            <td key={key}>{classes[key].title}</td>
            <td key={key}>{classes[key].category}</td>
            <td key={key}>{classes[key].price}</td>
            <td key={key}>{classes[key].description}</td>
            <td key={key}><button type="button" className="close" onClick={() => db.doDeleteClass(key)}>Delete</button></td>
            {/* Add Edit functionality */}
          </tr>
        )}
      </tbody>
    </table>
  </div>

export default withRouter(ClassManagerPage);

export {
  CreateClassForm,
  ClassListTable
};