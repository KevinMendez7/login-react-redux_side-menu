import React from 'react'
import './header-view-components.css'

const HeaderViewComponents = (props) => {
  console.log(props)
  return(
    <div className='header-view-components'>
      <div className='test-component'>Cuenta de prueba DocumMan</div>
      <div className='view-component'>O</div>
      <div className='manangement-component'>Administracion</div>
      <div className='document-component'>Documentos</div>
      <div className='help-component'>Ayuda</div>
      <div className='user-component' onClick={props.logoutClick}>kmendez</div>
    </div>
  )
}
export default HeaderViewComponents
