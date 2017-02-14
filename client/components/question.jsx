import React from 'react';

export default class Question extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="question" onClick={this.props.setSelectedQuestionChat.bind(null, this.props.id)}>
        {this.props.userName}
        {this.props.created_at}
        {this.props.question}
      </div>
    );
  }
}
