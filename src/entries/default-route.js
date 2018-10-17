import React from 'react'
import { Router, Route } from 'react-router-dom';
import MenuLayout from '../pages/menu/component/menu-layout'
import SideMenu from '../pages/menu/component/side-menu'
import HeaderSideMenu from '../pages/menu/component/header-side-menu'
import ViewLayout from '../pages/menu/component/view-layout'
import HeaderViewLayout from '../pages/menu/component/header-view-layout'
import SideMenuItems from '../pages/menu/component/side-menu-items'
import HeaderViewComponents from '../pages/menu/component/header-view-components'
import SearchView from '../pages/search/container/search-view'

const DefaultRoute = (props) => {
  console.log(props)
  return(
    <MenuLayout>
      <SideMenu>
        <HeaderSideMenu />
        <SideMenuItems>
        </SideMenuItems>
      </SideMenu>
      <ViewLayout>
        <HeaderViewLayout>
          <HeaderViewComponents logoutClick={props.logoutClick} />
        </HeaderViewLayout>
         {props.children}
      </ViewLayout>
    </MenuLayout>
  )
}
export default DefaultRoute
