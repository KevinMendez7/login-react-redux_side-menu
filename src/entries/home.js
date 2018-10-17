import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {store} from '../util/store'
import {Home} from '../pages/home/container/home'

const homeContainer = document.getElementById('home-container')

render( <Provider store={store}>
          <Home  />
        </Provider>, homeContainer)
