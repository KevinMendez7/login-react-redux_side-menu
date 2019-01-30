import React from 'react'
import {Link} from 'react-router-dom'
import './side-menu-items.css'

const SideMenuItems = (props) => {

  return(
    <div className='side-menu-items'>
      <div className='item' onClick={props.homeItem}><span>Inicio</span></div>
      <div className='item' onClick={props.handleSearch}><span>Busqueda</span></div>
      <div className='item' onClick={props.loginClick}><span>Carga de documentos</span></div>
      <div className='item'><span>Explorador</span></div>
      <div className='item'><span>Nuevo Radicado</span></div>
      <Link className='view-layout' to='/Login'>TEST
      </Link>
    </div>
  )
}
export default SideMenuItems
