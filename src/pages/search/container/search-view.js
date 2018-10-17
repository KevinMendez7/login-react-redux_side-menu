import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {history} from '../../../util/history'
import SearchForm from '../component/search-form'

class SearchView extends Component {

  constructor(props){
    super(props)
    // console.log(this.state)

  }

  handleChange(){
    let path='/Search'
    console.log('click')
    // this.props.
    history.push(path)
  }

  render(){
    // console.log(this.props)
    return(
      <SearchForm
      // props={this.props}
      handleChange={this.handleChange}
      />
    )
  }
}

export default SearchView
