import React from 'react'
import Explorer from '../../../icons/component/explorer'
import './box.css'

const ExplorerBox = (props) => {

  return(
    <div className='box'>
      <h3> <Explorer size={30} color={'#2359B6'} /><span>Explorador</span></h3>
      <p>Explora los documentos en el sistema</p>
      <button>Explorar</button>
    </div>
  )
}

export default ExplorerBox
