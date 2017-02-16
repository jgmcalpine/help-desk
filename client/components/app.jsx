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
      questions: {},
      answers: {},
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

  handleSignUp (event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const profile = event.target.profileField.value;
    $.ajax({
      url: '/signup/',
      type: 'POST',
      data: JSON.stringify({ username, password, profile }),
      contentType: 'application/json; charset=utf-8',
      success: (data) => {
        if (data.status === 'success') {
          this.setState({ userName: data.username });
          browserHistory.push('/main_page');
        }
      }
    });
  };

  handleLogIn(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    $.ajax({ 
      url: '/login/',
      type: 'POST',
      data: JSON.stringify({username, password}),
      contentType: "application/json; charset=utf-8",
    })
    .done((data) => {
      if (data.id) {
        this.setState({
          userId: data.id,
          userName: data.username,
        }, () => {
          browserHistory.push('/dashboard');
        });
      } else {
        alert('Invalid credentials!');
      }
    })
    .fail(function() {
      alert("error");
    })
  };

  getQuestions() {
    $.ajax({ 
      url: '/questions',
      type: 'GET',
      contentType: "application/json; charset=utf-8",
    })
    .done((data) => {
      const newState = {questions : {}};
      data.forEach((question) => {
        newState.questions[question.id] = question;
      })
      this.setState(newState);
    });
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

  handleResponsePost(event) {
    console.log('lets be sure');
    event.preventDefault;
    const response = event.target.response.value;
    $.ajax({
      url: '/responses/',
      type: 'POST',
      data: JSON.stringify(dataObj),
      contentType: 'application/json; charset=utf-8',
      success: (data) => {
        if (data.status === 'success') {
          this.setState({ responses: data.responses });
        }
      }
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
        })}
      </div>
    );
  }
}
