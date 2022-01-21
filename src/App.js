import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import '../dist.css'
import './app.css'

export default () => (
  <Router>
    <div>
      <div>
        <Routes />
      </div>
    </div>
  </Router>
)
