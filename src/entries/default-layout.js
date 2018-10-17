import React, {Component} from 'react'
import { Router, Route } from 'react-router-dom';
import MenuLayout from '../pages/menu/component/menu-layout'
import SideMenu from '../pages/menu/component/side-menu'
import HeaderSideMenu from '../pages/menu/component/header-side-menu'
import ViewLayout from '../pages/menu/component/view-layout'
import HeaderViewLayout from '../pages/menu/component/header-view-layout'
import SideMenuItems from '../pages/menu/component/side-menu-items'
import HeaderViewComponents from '../pages/menu/component/header-view-components'
import SearchView from '../pages/search/container/search-view'

const DefaultLayout = ({component: Component, ...rest}) => {

  const { searchClick, loginClick } = rest
  console.log(searchClick)

  return (
    <Route {...rest} render={matchProps => (
      <MenuLayout>
        <SideMenu>
          <HeaderSideMenu />
          <SideMenuItems searchClick={searchClick} loginClick={loginClick}>
          </SideMenuItems>
        </SideMenu>
        <ViewLayout>
          <HeaderViewLayout>
            <HeaderViewComponents />
          </HeaderViewLayout>
          <Component {...matchProps} />
        </ViewLayout>
      </MenuLayout>
      // <div className="DefaultLayout">
      //   <div className="Header">Header</div>
        // <div className="Footer">Footer</div>
      // </div>
    )} />
  )
}

export default DefaultLayout
