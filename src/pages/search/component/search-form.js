import React from 'react'
import {Link} from 'react-router-dom'

const SearchForm = (props) => {
  console.log(props.handleChange)
  return(
    <button onClick={props.handleChange}>Search</button>
    // <Link to='/Search' className='search-button'>Search</Link>
  )

}

export default SearchForm
