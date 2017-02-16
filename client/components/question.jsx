import React from 'react';
import Response from './response.jsx';
import QuestionAction from './questionaction.jsx';

export default class Question extends React.Component {
  constructor(props) {
      super(props);
  }

  handleClick(e) {
    e.preventDefault();
    const questionId = e.target.dataset.id;
  }

  render() {
    let responses = [];

    if (this.props.data.responses) {
      this.props.data.responses.forEach((response, idx) => {
        responses.push(<Response key={'response' + response.id} data={response} />);
      });
    }

    return (
      <div className="panel-group" id={'accordion' + this.props.data.id} role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingOne">
            <h4 className="panel-title">
              <a role="button" data-id={this.props.data.id} data-toggle="collapse" data-parent={'#accordion' + this.props.data.id} href={'#collapseOne' + this.props.data.id} aria-expanded="true" aria-controls="collapseOne">
                {this.props.data.question}
              </a>
            </h4>
          </div>
          <div id={'collapseOne' + this.props.data.id} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">
              <ul className="list-group">
                {responses}
              </ul>
              <QuestionAction status={this.props.data.status.id} handleResponsePost={this.props.handleResponsePost} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
