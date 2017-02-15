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
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-danger">Decline</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">Right</button>
          </div>
        </div>
      )
    }
}

