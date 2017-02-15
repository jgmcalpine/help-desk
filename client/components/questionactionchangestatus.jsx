import React from 'react';


export default class QuestionActionChangeStatus extends React.Component {
  constructor(props) {
      super(props);
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
      return (
        <div className="input-group">
            <span className="input-group-btn">
            <button className="btn btn-danger" type="button">Decline</button>
            <button className="btn btn-primary" type="button">Close</button>
            </span>
        </div>
      );
    }
}
