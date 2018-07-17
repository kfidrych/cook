import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

const ClassManagerPage = ({ history }) =>
  <div>
    <h1>Class Manager</h1>
    <CreateClassForm history={history} />
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
        db.doCreateClass(createClass.class.id, title, description, category, price)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
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
        <input
          value={category}
          onChange={event => this.setState(updateByPropertyName('category', event.target.value))}
          type="text"
          placeholder="Class Category (a la carte or package)"
        />
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

class ClassList extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  render() {
    return (
      <div class="container">
        <h2>Current Classes Offered</h2>            
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default withRouter(ClassManagerPage);

export {
  CreateClassForm
};