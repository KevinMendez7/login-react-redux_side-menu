import React from 'react'
import './menu-layout.css'

const MenuLayout = (props) => {

  return(
    <div className='menu-layout'>
      {props.children}
    </div>
  )
}
export default MenuLayout
