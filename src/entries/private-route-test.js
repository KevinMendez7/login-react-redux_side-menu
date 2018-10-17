import React, {Component} from 'react'
import { Router, Route, Redirect } from 'react-router-dom';
import MenuLayout from '../pages/menu/component/menu-layout'
import SideMenu from '../pages/menu/component/side-menu'
import HeaderSideMenu from '../pages/menu/component/header-side-menu'
import ViewLayout from '../pages/menu/component/view-layout'
import HeaderViewLayout from '../pages/menu/component/header-view-layout'
import SideMenuItems from '../pages/menu/component/side-menu-items'
import HeaderViewComponents from '../pages/menu/component/header-view-components'
import SearchView from '../pages/search/container/search-view'
import DefaultRoute  from './default-route'

export const PrivateRouteTest = ({ component: Component, ...rest }) => (

  <Route {...rest} render={props => (    
      localStorage.getItem('user')
          ? <DefaultRoute logoutClick={rest.logoutClick} >
              <Component {...props} />
            </DefaultRoute>
          : <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
  )} />

)
