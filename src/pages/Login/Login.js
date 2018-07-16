import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Row, Container } from "../../components/Grid";
import { UserInput } from "../../components/UserLog";



class Login extends Component {
    constructor() {
		super()
		this.state = {
			username: "",
			password: "",
			redirectTo: null
        }
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/userprofile'
		})
	}
    render() {
        return (
            <Container fluid>
                <Row>
                    <div className="col-sm-6">
                        <form className="login">
                            <p>Username</p>
                                <UserInput 
                                    name="username"
                                    placeholder="&#xf007;   Username"
                                />
                            <p>Password</p>
                                <UserInput 
                                    name="password"
                                    placeholder="&#xf023;   Password"
                                />
                            <button className="btn btn-warning loginBtn">Login</button>
                        </form>
                    </div>
                    <a class="g-signin2" href="/auth/google">Sign In with Google</a>
                    {/* <button href="/auth/google">Sign In with Google</button> */}
                </Row>
            </Container>
        )
    }
}

export default Login;