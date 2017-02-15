import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router'
import {Link} from 'react-router';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
      e.preventDefault();
      const profileChoice = e.target.dataset.value;
      console.log(profileChoice);
      document.getElementById('profileField').value = profileChoice;
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center">
                        <div className="login-panel panel panel-default">
                            <div className="panel-heading">
                                <h1 className="panel-title">Help Desk - SignUp</h1>
                            </div>
                            <div className="panel-body">
                                <form role="form" id="login-form" onSubmit={this.props.handleSignUp}>
                                    <input type="hidden" id="profileField" value="" />
                                    <fieldset>
                                        <div className="form-group">
                                            <input name="username" className="form-control" placeholder="Username" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input name="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input name="confirm_password" className="form-control" placeholder="Confirm password" onChange={this.handleChange} />
                                        </div>
                                        <div className="btn-group form-group" role="group">
                                          <button data-value="1" type="button" className="btn btn-default" onClick={this.handleClick} >Client</button>
                                          <button data-value="2" type="button" className="btn btn-default" onClick={this.handleClick} >Instructor</button>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block form-group">Create account</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}