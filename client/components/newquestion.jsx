import React from 'react';

export default class NewQuestion extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      const question = e.target.question.value;
      if (!question) return;
      const dataToSend = {
          userId: this.props.mainState.userId,
          question: question
      }
      this.props.postQuestion(dataToSend);
  }

  render() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Send your question</h3>
            </div>
            <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-11">
                            <input type="question" className="form-control" id="question" />
                        </div>
                        <div className="col-sm-1">
                            <button type="submit" className="btn btn-default">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}
