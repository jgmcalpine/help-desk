import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">NUsizo - Help Desk</a>

                        <div className="navbar-right">
                            ## {this.props.userName} ##
                        </div>
                </div>
            </div>
        </nav>
    );
  }
}