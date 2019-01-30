import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import queryString from 'query-string' //library to parse query parameters
import {history} from '../../../util/history'
import SearchForm from '../component/search-form'
import SearchLayout from '../component/search-layout'
import SearchHeader from '../component/search-header'
import SearchBox from '../component/search-box'

class Search extends Component {

  constructor(props){
    super(props)

    this.state = {
      parameters: {}
    }
    // console.log(this.state)

  }

  // componentDidMount() {
  //   const values = queryString.parse(this.props.location.search)
  //   //?filter=top&origin=im
  //   console.log(values.filter) // "top"
  //   console.log(values.origin) // "im"
  // }

  handleSubmit(){

  }

  handleChange(){
    console.log('click')

  }

  render(){
    // console.log(this.props)
    return(
      <SearchLayout>
        <SearchHeader />
        <SearchBox>          
        </SearchBox>
      </SearchLayout>
      // <SearchForm
      // // props={this.props}
      // handleChange={this.handleChange}
      // />
    )
  }
}

export default Search
