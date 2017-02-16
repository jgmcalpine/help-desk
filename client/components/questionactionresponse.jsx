import React from 'react';

export default class QuestionActionResponse extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      const response = e.target.response.value;
      if (!question) return;
      const dataToSend = {
          response: response,
      }
      e.target.response.value = '';
      this.props.handleResponsePost(dataToSend);
  }

  render() {
    console.log(this.props);
    console.log("rendering the q response");
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input name="response" id="response "type="response" className="form-control" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Answer</button>
          </span>
        </div>
      </form>
    );
  }
}
