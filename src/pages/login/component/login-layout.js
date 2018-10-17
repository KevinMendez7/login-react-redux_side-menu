import React from 'react'
import './login-layout.css'

const LoginLayer = (props) =>{

  return(
    <div className='login-layout'>
      {props.children}
    </div>
  )

}

export default LoginLayer
