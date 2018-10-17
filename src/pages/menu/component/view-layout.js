import React from 'react'
import './view-layout.css'

const ViewLayout = (props) => {

  return(
    <div className='view-layout'>
      {props.children}
    </div>
  )
}
export default ViewLayout
