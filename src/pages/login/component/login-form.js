import React from 'react'
import {Link} from 'react-router-dom'
import './login-form.css'

const LoginForm = (props) =>{

  return(
    <div className='login-form'>
      <h2>Login</h2>
      <form name='form' onSubmit={props.handleSubmit}>
        <div className={'form-group' + (props.submitted && !props.username ? ' has-error' : '')}>
          <label htmlFor='username'>Username:</label>
          <input type='text' className='form-control' name='username' value={props.username} onChange={props.handleChange} />
          {props.submitted && !props.username &&
            <div className="help-block">Username is required</div>
          }
        </div>
        <div className={'form-group' + (props.submitted && !props.password ? ' has-error' : '')}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" value={props.password} onChange={props.handleChange} />
          {props.submitted && !props.password &&
            <div className="help-block">Password is required</div>
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Login</button>
          {props.loggingIn}
          <Link to="/Home" className="btn btn-link">Register</Link>
        </div>
      </form>
    </div>
  )

}

export default LoginForm;
