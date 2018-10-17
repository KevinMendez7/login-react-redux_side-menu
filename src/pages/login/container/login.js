import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import LoginForm from '../component/login-form'
import LoginLayer from '../component/login-layout'
import {userActions} from '../../../_actions/user-actions'

class Login extends Component {
  constructor(props){
    super(props);

    this.props.dispatch(userActions.logout());

    this.state = {
      username : '',
      password : '',
      submitted : false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });

    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render(){

    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;

    return(
      <LoginLayer>
        <LoginForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          username={this.state.username}
          password={this.state.password}
          submitted={this.state.submitted}
          loggingIn={this.loggingIn}>
        </LoginForm>
      </LoginLayer>

    )

  }

}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);

export { connectedLoginPage as Login }
