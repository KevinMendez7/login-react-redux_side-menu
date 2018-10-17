import React from 'react'
import './side-menu.css'

const SideMenu = (props) => {

  return(
    <div className='side-menu'>
      {props.children}
    </div>
  )

}

export default SideMenu
