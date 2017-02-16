import React from 'react';
import Login from './login.jsx';
import Signup from './signup.jsx';
import Dashboard from './dashboard.jsx';
import Navbar from './navbar.jsx';
import $ from 'jquery';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      userName: null,
      profile: null,
      questions: {},
      responses: {},
      questionsStatus: [
        {id: 1, name: 'Opened'},
        {id: 2, name: 'Pending'},
        {id: 3, name: 'Waiting'},
        {id: 4, name: 'Closed'},
      ]
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleResponsePost = this.handleResponsePost.bind(this);
  }

  handleLogIn(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    $.ajax({
      url: '/login/',
      type: 'POST',
      data: JSON.stringify({ username, password }),
      contentType: "application/json; charset=utf-8",
    })
    .done((data) => {
      this.setState({
        userId: data.id,
        userName: data.username,
      }, () => {
        browserHistory.push('/dashboard');
      });
    })
    .fail(function() {
      alert("error");
    })
  };

  handleSignUp (dataObj) {
    console.log('in handle signup');
    console.log(dataObj);
    $.ajax({
      url: '/signup/',
      type: 'POST',
      data: JSON.stringify(dataObj),
      contentType: 'application/json; charset=utf-8',
    })
    .done((data) => {
      console.log('done with ajax call', data);
      let username = this.state.username;
      let password = this.state.password;
      let profile = this.state.profile;
      this.setState({ username, password, profile }, () => {
        browserHistory.push('/dashboard');
      });
    })
    .fail(function() {
      alert('error with the sign up request');
    })
  };

  getQuestions() {
    return {
      1: {
       id: 1,
       question: 'What is the name of the first president of Colombia?',
       createdAt: '2017-02-13 21:32:36.698226-08',
       updatedAt: '2017-02-13 21:32:36.698226-08',
       status: { id: 1, name: 'Opened' },
       user: { id: 2, name: 'Flavia' },
       responses: [],
      },
      2: {
       id: 2,
       question: 'How much information can you store in your brain?',
       createdAt: '2017-02-13 21:32:36.698226-08',
       updatedAt: '2017-02-13 21:32:36.698226-08',
       responses: [
         {id: 1, response: '163412 terabytes', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 1, name: 'Jose'}},
       ],
       status: { id: 2, name: 'Answered' },
       user: { id: 2, name: 'Cris' },
      }, 
      3: {
       id: 3,
       question: 'Is it possible to be happy alone?',
       createdAt: '2017-02-13 21:32:36.698226-08',
       updatedAt: '2017-02-13 21:32:36.698226-08',
       status: { id: 3, name: 'Denied' },
       user: { id: 2, name: 'Beatriz' },
       responses: [
         {id: 1, response: 'Sure', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 1, name: 'Bia'}},
         {id: 2, response: 'Maybe', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 2, name: 'Arnold'}},
       ],
      },
      4: {
       id: 4,
       question: 'Lorem ispusm dolor wet?',
       createdAt: '2017-02-13 21:32:36.698226-08',
       updatedAt: '2017-02-13 21:32:36.698226-08',
       status: { id: 4, name: 'Closed' },
       user: { id: 2, name: 'Beatriz' },
       responses: [
         {id: 1, response: 'Some where over the rainbow you can find the inexistent', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 1, name: 'Bia'}},
       ],
      },
    };

    // $.get('/questions', (response) => {
    //   const newState = {questions : {}};
    //   response.forEach((question) => {
    //     newState.questions[question] = {
    //       id: question.id,
    //       question: question.question,
    //       created_at: question.createdAt,
    //       userId: question.userId
    //     }
    //   })
    //   this.setState(newState);
    // });
  }

  postQuestion(dataObj) {
    $.ajax({
      url: '/questions/',
      type: 'POST',
      data: JSON.stringify(dataObj),
      contentType: 'application/json; charset=utf-8',
    })
    .done((data) => {
      let questions = this.state.questions;
      questions[data.id] = data;
      this.setState(questions, () => {
        console.log('State updated...');
        browserHistory.push('/dashboard');
      });
    })
    .fail(function() {
      alert('error');
    })
  };

  handleResponsePost(dataObj) {
    $.ajax({
      url: '/responses/',
      type: 'POST',
      data: JSON.stringify(dataObj),
      contentType: 'application/json; charset=utf-8',
    })
    .done((data) => {
      let responses = this.state.responses;
      this.setState({ responses });
    })
    .fail(function() {
      alert('error with the ajax post request');
    })
  }

  render() {
    return (
      <div>
        <Navbar userName={this.state.userName} />
        {React.cloneElement(this.props.children, {
          mainState: this.state,
          getQuestions: this.getQuestions,
          postQuestion: this.postQuestion,
          handleLogIn: this.handleLogIn,
          handleResponsePost: this.handleResponsePost,
          handleSignUp: this.handleSignUp,
        })}
      </div>
    );
  }
}
