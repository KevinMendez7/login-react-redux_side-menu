import React, { Component } from 'react'
import DocumentLayout from '../component/document-layout'
import HeaderDocument from '../component/header-document'
import DocumentBox from '../component/document-box'
import SearchBox from '../component/search-box'
import UploadBox from '../component/upload-box'
import ExplorerBox from '../component/explorer-box'

class Document extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <DocumentLayout>
        <HeaderDocument />
        <DocumentBox>
          <SearchBox />
          <UploadBox />
          <ExplorerBox />
        </DocumentBox>
      </DocumentLayout>
    )
  }
}

export default Document
