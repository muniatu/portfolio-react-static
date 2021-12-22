import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import '../dist/output.css'
import './app.css'

export default () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/softonic-projects">Softonic Projects</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
