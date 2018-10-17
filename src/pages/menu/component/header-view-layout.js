import React from 'react'
import './header-view-layout.css'

const HeaderViewLayout = (props) => {

  return(
    <div className='header-view-layout'>
      {props.children}
    </div>
  )

}
export default HeaderViewLayout
