import React from 'react'
import './document-box.css'

const DocumentBox = (props) => {

  return(
    <div className='document-box'>
      {props.children}
    </div>
  )

}

export default DocumentBox
