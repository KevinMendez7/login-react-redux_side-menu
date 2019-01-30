import React from 'react'
import Search from '../../../icons/component/search'
import './box.css'


const SearchBox = (props) => {
  console.log(props)
  return(
    <div className='box'>
      <h3> <Search size={30} color={'#2359B6'} /><span>Busqueda</span></h3>
      <p>Busca los documentos en el sistema</p>
      <button onClick={props.handleSearch}>Buscar</button>
    </div>
  )

}

export default SearchBox
