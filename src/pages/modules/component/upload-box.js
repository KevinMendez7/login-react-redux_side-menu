import React from 'react'
import Upload from  '../../../icons/component/upload'
import './box.css'

const UploadBox = (props) => {

  return(
    <div className='box'>
      <h3> <Upload size={30} color={'#2359B6'} /><span>Carga de documentos</span></h3>
      <p>Carga documentos en el sistema</p>
      <button>Cargar</button>
    </div>
  )
}

export default UploadBox
