import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router'
import {Link} from 'react-router';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
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
                                        <button type="submit" className="btn btn-primary btn-block">Create account</button>
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