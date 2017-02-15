import React from 'react';
import Login from './login.jsx';
import Signup from './signup.jsx';
import Dashboard from './dashboard.jsx';
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
      userName: 'miketyson001',
      questions: {},
      questionsStatus: [
        {id: 1, name: 'Opened'},
        {id: 2, name: 'Pending'},
        {id: 3, name: 'Waiting'},
        {id: 4, name: 'Closed'},
      ]
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.setSelectedQuestionChat = this.setSelectedQuestionChat.bind(this);
    this.chatInputHandler = this.chatInputHandler.bind(this);
    this.newQuestionInputHandler = this.newQuestionInputHandler.bind(this);
    this.postMessage = this.postMessage.bind(this);
    this.postNewQuestion = this.postNewQuestion.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
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

  handleLogIn(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    $.ajax({
      url: '/login/',
      type: 'POST',
      data: JSON.stringify({username, password}),
      contentType: "application/json; charset=utf-8",
      success: (data) => {
        if (data.status === 'success') {
          this.setState({userName: data.username});
          browserHistory.push('/dashboard');
        }
      }
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
       responses: [
         {id: 1, response: 'Pablo Silveira', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 1, name: 'Bia'}},
         {id: 2, response: 'Pablo Escobar', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 2, name: 'Arnold'}},
         {id: 3, response: 'Balboa', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 3, name: 'Rocky'}},
       ],
      },
      2: {
       id: 2,
       question: 'How many information can you store in your brain?',
       createdAt: '2017-02-13 21:32:36.698226-08',
       updatedAt: '2017-02-13 21:32:36.698226-08',
       responses: [
         {id: 1, response: '163412 terabytes', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 1, name: 'Jose'}},
         {id: 2, response: 'I have no idea', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 2, name: 'Rambo'}},
         {id: 3, response: 'As far as you allow', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 3, name: 'Rocky'}},
       ],
       status: { id: 2, name: 'Closed' },
       user: { id: 2, name: 'Cris' },
      }, 
      3: {
       id: 3,
       question: 'Is it possible to be happy alone?',
       createdAt: '2017-02-13 21:32:36.698226-08',
       updatedAt: '2017-02-13 21:32:36.698226-08',
       status: { id: 1, name: 'Opened' },
       user: { id: 2, name: 'Beatriz' },
       responses: [
         {id: 1, response: 'Sure', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 1, name: 'Bia'}},
         {id: 2, response: 'Maybe', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 2, name: 'Arnold'}},
         {id: 3, response: 'No', createdAt: '2017-02-13 21:32:36.698226-08', user: {id: 3, name: 'Rocky'}},
       ],
      }
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

  getMessages() {
    $.get('/messages', (res) => {
      const temp = this.state.questions;
      res.forEach((message) => {
        if (temp.hasOwnProperty(message.questionid)) {
          temp[message.questionid].chatMessages.push({
            userName: message.username,
            message: message.message,
            created_at: message.createdAt,
          })
        }
      });
      this.setState({
        questions: temp,
        selectedQuestionChat: (this.state.selectedQuestionId ? this.state.questions[this.state.selectedQuestionId].chatMessages : [])
      });
    });
  }

  postMessage(id, e) {
    e.preventDefault();
    $.post('/messages', {
      questionid: id,
      username: this.state.userName,
      message: this.state.chatInput,
    }, (response) => {
      this.getQuestions();
      this.getMessages();
    });
    this.setState({ chatInput: '' })
  }

  newQuestionInputHandler(e) {
    e.preventDefault();
    this.setState({ newQuestionInput: e.target.value });
  }

  chatInputHandler(e) {
    e.preventDefault();
    this.setState({ chatInput: e.target.value });
  }

  setSelectedQuestionChat(id) {
    if (id) {
      this.setState({
        selectedQuestionChat: this.state.questions[id].chatMessages,
        selectedQuestionId: id,
      });
    }
  }

  postNewQuestion(e) {
    e.preventDefault();
    $.post('/questions', {
      asker: this.state.userName,
      question: this.state.newQuestionInput,
    }, (response) => {
      this.getQuestions();
    });
    this.setState({ newQuestionInput: '' });
  };
  
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={() => <Login handleLogIn={this.handleLogIn} />} />
        <Route path="/signup" component={() => <Signup handleSignUp={this.handleSignUp} />} />
        <Route path="/dashboard" component={() => <Dashboard
          mainState={this.state}
          getQuestions={this.getQuestions}
        />} />
      </Router>
    );
  }
}
