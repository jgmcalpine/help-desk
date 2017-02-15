import React from 'react';

export default class QuestionActionResponse extends React.Component {
  constructor(props) {
      super(props);
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleResponsePost}>
        <div className="input-group">
          <input type="text" className="form-control" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Answer</button>
          </span>
        </div>
      </form>
    );
  }
}
