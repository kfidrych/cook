import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';
import './SignUpSurvey.css';
import UserNav from "../../components/UserNav";

auth.onAuthStateChanged(function(user) {
  if (user) {
    INITIAL_STATE.user = user;
  } else {
    // No user is signed in.
    INITIAL_STATE.user = "no user";
  }
});

const SignUpSurveyPage = ({ history }) =>
  <div>
    <UserNav />
    <h1>Tell us a little more about yourself!</h1>
    <SignUpSurvey history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  user: auth.getCurrentUser,
  Q1: "",
  Q2: "",
  Q3: "",
  Q4: "",
  Q5: "",
  Q6: "",
  Q7: "",
  Q8: "",
  Q9: "",
  Q10: "",
  Q11: "",
  Q12: "",
  Q13: "",
  Q14: "",
  Q15: "",
  Q16: ""
};

class SignUpSurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      Q1,
      Q2,
      Q3,
      Q4,
      Q5,
      Q6,
      Q7,
      Q8,
      Q9,
      Q10,
      Q11,
      Q12,
      Q13,
      Q14,
      Q15,
      Q16
    } = this.state;

    const {
      history,
    } = this.props;

    db.doCreateForm(this.state.user.email,
      Q1,
      Q2,
      Q3,
      Q4,
      Q5,
      Q6,
      Q7,
      Q8,
      Q9,
      Q10,
      Q11,
      Q12,
      Q13,
      Q14,
      Q15,
      Q16
    ).then(createForm => {

      db.doCreateForm(createForm.form.id, this.state.user.email,
        Q1,
        Q2,
        Q3,
        Q4,
        Q5,
        Q6,
        Q7,
        Q8,
        Q9,
        Q10,
        Q11,
        Q12,
        Q13,
        Q14,
        Q15,
        Q16
      ).then(function() {
        console.log("Update Successful");
      }).catch(function(error) {
        console.log(error);
      });
    });

    event.preventDefault();
  }

  render() {
    const {
      Q1,
      Q2,
      Q3,
      Q4,
      Q5,
      Q6,
      Q7,
      Q8,
      Q9,
      Q10,
      Q11,
      Q12,
      Q13,
      Q14,
      Q15,
      Q16
    } = this.state;

    const isInvalid =
      Q1 === '' ||
      Q2 === '' ||
      Q3 === '' ||
      Q4 === '' ||
      Q5 === '' ||
      Q6 === '' ||
      Q7 === '' ||
      Q8 === '' ||
      Q9 === '' ||
      Q10 === '' ||
      Q11 === '' ||
      Q12 === '' ||
      Q13 === '' ||
      Q14 === '' ||
      Q15 === '' ||
      Q16 === '';

    return (
      <form id="surveyForm" onSubmit={this.onSubmit}>
                <label for="Q1">How many years have you been cooking?</label>
                <input
                    className="surveyInput"
                    value={Q1}
                    onChange={event => this.setState(updateByPropertyName('Q1', event.target.value))}
                    type="number"
                    placeholder="Number of years you have been cooking."
                />
                <label for="Q2">When did you first start cooking, and who was your first teacher and/or role model?</label>
                <input
                    className="surveyInput"
                    value={Q2}
                    onChange={event => this.setState(updateByPropertyName('Q2', event.target.value))}
                    type="text"
                    placeholder=""
                />
                <label for="Q3">Do you enjoy cooking? Why?</label>
                <input
                    className="surveyInput"
                    value={Q3}
                    onChange={event => this.setState(updateByPropertyName('Q3', event.target.value))}
                    type="text"
                    placeholder=""
                />
                <label for="Q4">What are your favorite dishes to make?</label>
                <input
                    className="surveyInput"
                    value={Q4}
                    onChange={event => this.setState(updateByPropertyName('Q4', event.target.value))}
                    type="text"
                    placeholder=""
                />
                <label for="Q5">What are your favorite styles of cooking?</label>
                <input
                    className="surveyInput"
                    value={Q5}
                    onChange={event => this.setState(updateByPropertyName('Q5', event.target.value))}
                    type="text"
                    placeholder=""
                />
                <label for="Q6">What is your best dish?</label>
                <input
                    className="surveyInput"
                    value={Q6}
                    onChange={event => this.setState(updateByPropertyName('Q6', event.target.value))}
                    type="text"
                    placeholder=""
                />
                <label for="Q7">What styles of cooking are you most proficient in?</label>
                <input
                    className="surveyInput"
                    value={Q7}
                    onChange={event => this.setState(updateByPropertyName('Q7', event.target.value))}
                    type="text"
                    placeholder=""
                />
                <label for="Q8">What equipment do you currently have in your kitchen?</label>
                <input
                    className="surveyInput"
                    value={Q8}
                    onChange={event => this.setState(updateByPropertyName('Q8', event.target.value))}
                    type="text"
                    placeholder=""
                />
                <label for="Q9">How many people do you normally cook for?</label>
                <input
                    className="surveyInput"
                    value={Q9}
                    onChange={event => this.setState(updateByPropertyName('Q9', event.target.value))}
                    type="text"
                    placeholder=""
                />
                <label for="Q10">What styles of cooking would you like to get better in?</label>
                <input
                    className="surveyInput"
                    value={Q10}
                    onChange={event => this.setState(updateByPropertyName('Q10', event.target.value))}
                    type="text"
                    placeholder=""
                />
                 <label for="Q11">What is the largest number of people would you ideally be able to cook for? (2-4, 4-8, 8+)</label>
                <input
                    className="surveyInput"
                    value={Q11}
                    onChange={event => this.setState(updateByPropertyName('Q11', event.target.value))}
                    type="text"
                    placeholder=""
                />
                 <label for="Q12">What are some specific skills that you would like to improve?</label>
                <input
                    className="surveyInput"
                    value={Q12}
                    onChange={event => this.setState(updateByPropertyName('Q12', event.target.value))}
                    type="text"
                    placeholder=""
                />
                 <label for="Q13">Would you like to spend more time making more complex dishes or even less time making simple, down-to-earth meals?</label>
                <input
                    className="surveyInput"
                    value={Q13}
                    onChange={event => this.setState(updateByPropertyName('Q13', event.target.value))}
                    type="text"
                    placeholder=""
                />
                 <label for="Q14">Are you open to purchasing new kitchen equipment (utensils, counter top appliances, etc)?</label>
                <input
                    className="surveyInput"
                    value={Q14}
                    onChange={event => this.setState(updateByPropertyName('Q14', event.target.value))}
                    type="text"
                    placeholder=""
                />
                 <label for="Q15">Roughly how much counter space do you have in your kitchen?</label>
                <input
                    className="surveyInput"
                    value={Q15}
                    onChange={event => this.setState(updateByPropertyName('Q15', event.target.value))}
                    type="text"
                    placeholder=""
                />
                 <label for="Q16">Are there any specific dishes or meals that you've always dreamed of making, but never attempted or been able to accomplish?</label>
                <input
                    className="surveyInput"
                    value={Q16}
                    onChange={event => this.setState(updateByPropertyName('Q16', event.target.value))}
                    type="text"
                    placeholder=""
                />
                <button disabled={isInvalid} type="submit">
                    Submit Survey
                </button>

            </form>
    );
  }
}

export default withRouter(SignUpSurveyPage);

export { SignUpSurvey };



// Form Questions:
// How many years have you been cooking? {number}
// When did you first start cooking, and who was your first teacher and/or role model?
// Do you enjoy cooking?
// What are your favorite dishes to make?
// What are your favorite styles of cooking?
// What is your best dish?
// What styles of cooking are you most proficient in?
// What equipment do you currently have in your kitchen (check all that apply)? {list of checkboxes}
// How many people do you normally cook for?
// Questions for Goals:
// What styles of cooking would you like to get better in (check all that apply)? {list of checkboxes}
// What is the largest number of people would you ideally be able to cook for? {2-4, 4-8, 8+}
// What are some specific skills that you would like to improve? {maybe a checklist?}
// Would you like to spend more time making more complex dishes or even less time making simple, down-to-earth meals?
// Are you open to purchasing new kitchen equipment (utensils, counter top appliances, etc)? {maybe should be in the initial group of questions}
// Roughly how much counter space do you have in your kitchen? {radial button choices of different square footage amounts}
// Are there any specific dishes or meals that you've always dreamed of making, but never attempted or been able to accomplish?