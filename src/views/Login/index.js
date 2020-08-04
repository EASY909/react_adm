import React, { Component } from 'react';
import "./index.scss";
import LoginForm from "./LoginForm";
import RetisterForm from "./RegisterForm";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            formType: "login"
        };
    }

    switchForm = (value) => {
        this.setState({
            formType: value
        })
    }

    render() {

        return (
            <div className="form-wrap">
                <div>
                    <div className="form-content">
                        <div>
                            {
                                this.state.formType === 'login'
                                    ? <LoginForm switchForm={this.switchForm}></LoginForm>
                                    : <RetisterForm switchForm={this.switchForm}></RetisterForm>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;