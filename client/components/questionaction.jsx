import React from 'react';
import QuestionActionResponse from './questionactionresponse.jsx';
import QuestionActionChangeStatus from './questionactionchangestatus.jsx';


export default class QuestionAction extends React.Component {
  constructor(props) {
      super(props);
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    const status = this.props.status;
    let actionComponent = null;
    if (status === 1 || status === 3) {
        actionComponent = <QuestionActionResponse />;
    }
    if (status === 2) {
        actionComponent = <QuestionActionChangeStatus />;
    }
    return (
        <form>
            {actionComponent}
        </form>
    );
  }
}
