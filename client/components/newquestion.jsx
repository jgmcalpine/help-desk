import React from 'react';

export default class NewQuestion extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Send your question</h3>
            </div>
            <div className="panel-body">

                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-sm-11">
                            <input type="email" className="form-control" id="question" />
                        </div>
                        <div className="col-sm-1">                            <button type="submit" className="btn btn-default">Send</button></div>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}
