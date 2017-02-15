import React from 'react';

export default class Response extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <li className="list-group-item">{this.props.data.response}</li>
            // <div>{this.props.data.createdAt}</div>
            // <div>{this.props.data.user.name}</div>
    );
  }
}
