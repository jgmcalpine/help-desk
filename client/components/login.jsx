import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router'
import {Link} from 'react-router';

export default class Login extends React.Component {
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
                                <h1 className="panel-title">Help Desk</h1>
                            </div>
                            <div className="panel-body">
                                <form role="form" id="login-form" onSubmit={this.props.handleLogIn}>
                                    <fieldset>
                                        <div className="form-group">
                                            <input name="username" className="form-control" placeholder="Username" autoFocus />
                                        </div>
                                        <div className="form-group">
                                            <input name="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <Link to='/signup' className="text-right">Need an account? Signup</Link>
                    </div>
                </div>
            </div>
        );
    }
}
