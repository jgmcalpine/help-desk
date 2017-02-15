import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const user = this.props.userName;
    let userComp = null;
    if (user) {
        userComp = <div id="navbar" className="navbar-form navbar-right"><label className="btn btn-default">{user}</label></div>;
    }
    return (
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">NUsizo - Help Desk</a>
                </div>
                {userComp}
            </div>
        </nav>
        )
    };
}