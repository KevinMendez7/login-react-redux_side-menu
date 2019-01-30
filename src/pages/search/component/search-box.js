import React from 'react'
import './search-box.css'

const SearchBox = (props) => {

  return(
    <div className='search-box'>
      {props.children}
    </div>
  )

}

export default SearchBox
