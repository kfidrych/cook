import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { UserInput } from "../../components/UserLog";

import {
    getFromStorage,
    setInStorage
  } from "../../utils/storage"; 

class Register extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          token: "",
          signUpError: "",
          signInError: "",
          signInEmail: "",
          signInPassword: "",
          signUpLastName: "",
          signUpEmail: "",
          signUpPassword: "",
          signUpCity: "",
          signUpState: "",
          signUpZip: ""
        };

        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
        this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
        this.onTextboxChangeSignUpCity = this.onTextboxChangeSignUpCity.bind(this);
        this.onTextboxChangeSignUpState = this.onTextboxChangeSignUpState.bind(this);
        this.onTextboxChangeSignUpZip = this.onTextboxChangeSignUpZip.bind(this);

        this.onSignUp = this.onSignUp.bind(this); 
      };
    
      componentDidMount() {
        const token = getFromStorage('the_main_app');
        if (token) {
          fetch('/api/account/verify?token' + token)
              .then(res => res.json())
              .then(json => {
                if (json.success) {
                  this.setState({
                    token: token,
                    isLoading: false
                  })
                } else {
                  this.setState({
                    isLoading: false
                  })
                }
              });
        } else {
          this.setState({
            isLoading: false
          })
        }
      };

    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value
        })
    }

    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value
        })
    }

    onTextboxChangeSignUpFirstName(event) {
        this.setState({
            signUpFirstName: event.target.value
        })
    }

    onTextboxChangeSignUpLastName(event) {
        this.setState({
            signUpLastName: event.target.value
        })
    }

    onTextboxChangeSignUpCity(event) {
        this.setState({
            signUpCity: event.target.value
        })
    }

    onTextboxChangeSignUpState(event) {
        this.setState({
            signUpState: event.target.value
        })
    }

    onTextboxChangeSignUpZip(event) {
        this.setState({
            signUpZip: event.target.value
        })
    }

    onSignUp() {
        const {
            signUpEmail,
            signUpPassword,
            signUpFirstName,
            signUpLastName,
            signUpCity,
            signUpState,
            signUpZip
        } = this.state;

        this.setState({
            isLoading: true
        })

        fetch("/api/account/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signUpEmail,
                password: signUpPassword,
                firstName: signUpFirstName,
                lastName: signUpLastName,
                location: signUpCity + ", " + signUpState + " " + signUpZip
            }),
        }).then(res => res.json())
          .then(json => {
              if (json.success) {
                this.setState({
                    signUpError: json.message,
                    isLoading: false,
                    signUpEmail: "",
                    signUpPassword: "",
                    signUpCity: "",
                    signUpFirstName: "",
                    signUpLastName: "",
                    signUpState: "",
                    signUpZip: ""
                  });
              } else {
              this.setState({
                signUpError: json.message,
                isLoading: false
              });
            }
          })
    }


    render() {
        const {
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPassword,
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword,
            signUpCity,
            signUpState,
            signUpZip
          } = this.state;

          if (isLoading) {
            return (<div><p>Loading...</p></div>)
          }
        
        if (!token) {
            return (
                <div>
                    {
                        (signInError) ? (
                            <p>{signInError}</p>
                        ) : (null)
                    }
                    <Container fluid>
                    <Row>
                    <div className="col-sm-6">
                        <form className="login">
                            <p>Email</p>
                                <UserInput
                                    type="email" 
                                    name="email"
                                    placeholder="&#xf007;   Email"
                                    value={signUpEmail}
                                    onChange={this.onTextboxChangeSignUpEmail}
                                />
                            <p>Password</p>
                                <UserInput 
                                    type="password"
                                    name="password"
                                    placeholder="&#xf023;   Password"
                                    value={signUpPassword}
                                    onChange={this.onTextboxChangeSignUpPassword}
                                />
                            <p>First Name</p>
                                <UserInput 
                                    name="firstName"
                                    placeholder="First Name"
                                    value={signUpFirstName}
                                    onChange={this.onTextboxChangeSignUpFirstName}
                                />
                            <p>Last Name</p>
                                <UserInput 
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={signUpLastName}
                                    onChange={this.onTextboxChangeSignUpLastName}
                                />
                            <p>City</p>
                                <UserInput 
                                    name="city"
                                    placeholder="Philadelphia"
                                    value={signUpCity}
                                    onChange={this.onTextboxChangeSignUpCity}
                                />
                            <p>State</p>
                                <UserInput 
                                    name="state"
                                    placeholder="PA"
                                    value={signUpState}
                                    onChange={this.onTextboxChangeSignUpState}
                                />
                            <p>Zip Code</p>
                                <UserInput 
                                    name="zipCode"
                                    placeholder="Zip Code"
                                    value={signUpZip}
                                    onChange={this.onTextboxChangeSignUpZip}
                                />
                            <button className="btn btn-warning registerBtn" onClick={this.onSignUp}>Register</button>
                        </form>
                    </div>
                    </Row>
                </Container>
            </div>
            )
        }
       
    }
           
}

export default Register;