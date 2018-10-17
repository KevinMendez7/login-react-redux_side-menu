import React, {Component} from 'react'
import {withRoute} from 'react-router-dom'
import { connect } from 'react-redux';
import MenuLayout from '../component/menu-layout'
import SideMenu from '../component/side-menu'
import HeaderSideMenu from '../component/header-side-menu'
import ViewLayout from '../component/view-layout'
import HeaderViewLayout from '../component/header-view-layout'
import SideMenuItems from '../component/side-menu-items'
import HeaderViewComponents from '../component/header-view-components'
import SearchView from '../../search/container/search-view'

class Menu extends Component {

  constructor(props){
    super(props)
    console.log(props)
    this.routeChange = this.routeChange.bind(this)
    this.searchClick = this.searchClick.bind(this)
  }

  routeChange(){
    let path = '/Search'
    this.props.history.push(path)
  }

  searchClick(){
    let path = '/Login'
    // console.log(this.props.history)
    this.props.history.push(path)
  }

  render(){
    return(
      <MenuLayout>
        <SideMenu>
          <HeaderSideMenu />
          <SideMenuItems
          searchClick={this.searchClick}
          >
          </SideMenuItems>
        </SideMenu>
        <ViewLayout>
          <HeaderViewLayout>
            <HeaderViewComponents />
          </HeaderViewLayout>
          <SearchView /*props={this.routeChange}*/ />
        </ViewLayout>
      </MenuLayout>
    )
  }
}

function mapStateToProps(state){
  // console.log(state)
  const {routeChange} = state
  return routeChange
}

const connectedMenu = connect(mapStateToProps)(Menu);

export {connectedMenu as Menu}
