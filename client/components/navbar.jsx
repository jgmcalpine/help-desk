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
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">NUsizo - Help Desk</a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    {/*<ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                    </ul>*/}
                </div>
            </div>
        </nav>
    );
  }
}