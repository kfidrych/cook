import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';
import './UserManager.css';
import AdminNav from "../../components/AdminNav";

const UserManagerPage = ({ history }) =>
    <div>
        <AdminNav />
        <h1>User Manager</h1>
        <UserTable />
    </div>

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
});

class UserTable extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
          users: {}
        };
    }
    
    componentDidMount() {
    db.onceGetUsers().then(snapshot =>
        this.setState(() => ({ users: snapshot.val() }))
    );
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                { !!users && <UserList users={users} /> }
            </div>      
        )
    };
}
    
    
const UserList = ({ users }) =>
    
    <div className="container">
        <h2>Current Users</h2>            
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Survey Response</th>
                    <th>Remove Class</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(users).map(key =>
                    <tr>
                        <td key={key}>{users[key].username}</td>
                        <td key={key}>{users[key].email}</td>
                        <td key={key}>{users[key].role}</td>
                        <td key={key}>{users[key].surveyResponse}</td>
                        <td key={key}><button type="button" className="close" onClick={() => db.doDeleteUser(key)}>Delete</button></td>
                        {/* Add Edit functionality */}
                    </tr>
                )}
            </tbody>
        </table>
    </div>

export default withRouter(UserManagerPage);

export {
    UserTable
};