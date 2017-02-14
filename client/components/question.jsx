import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props)
  }

// onClick={this.props.setSelectedQuestionChat.bind(null, this.props.id)}

  render() {
    return (
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingOne">
            <h4 className="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {this.props.question} {this.props.created_at} {this.props.userName}
              </a>
            </h4>
          </div>
          <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">
              ANSWERS
            </div>
          </div>
        </div>
      </div>
    );
  }
}



