

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { cleanPath } from 'react-static'

import t_0 from '../../src/containers/Home'
import t_1 from '../../src/containers/About'
import t_2 from '../../src/containers/Projects'
import t_3 from '../../src/containers/Softonic-projects'
import t_4 from '../../src/containers/Construction.js'
import t_5 from '../../src/containers/softonic-projects/Chrome-plugin'
import t_6 from '../../src/containers/Blog'
import t_7 from '../../src/containers/Post'
import t_8 from '../../src/containers/404'

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [
  t_0,
t_1,
t_2,
t_3,
t_4,
t_5,
t_6,
t_7,
t_8
]

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 8
}

// Get template for given path
const getComponentForPath = path => {
  path = cleanPath(path)
  return global.componentsByTemplateID[global.templateIDsByPath[path]]
}

global.reactStaticGetComponentForPath = getComponentForPath
global.reactStaticRegisterTemplateIDForPath = (path, id) => {
  global.templateIDsByPath[path] = id
}

export default class Routes extends Component {
  render () {
    const { component: Comp, render, children } = this.props

    const getFullComponentForPath = path => {
      let Comp = getComponentForPath(path)
      let is404 = path === '404'
      if (!Comp) {
        is404 = true
        Comp = getComponentForPath('404')
      }
      return newProps => (
        Comp
          ? <Comp {...newProps} {...(is404 ? {is404: true} : {})} />
          : null
      )
    }

    const renderProps = {
      componentsByTemplateID: global.componentsByTemplateID,
      templateIDsByPath: global.templateIDsByPath,
      getComponentForPath: getFullComponentForPath
    }

    if (Comp) {
      return (
        <Comp
          {...renderProps}
        />
      )
    }

    if (render || children) {
      return (render || children)(renderProps)
    }

    // This is the default auto-routing renderer
    return (
      <Route path='*' render={props => {
        let Comp = getFullComponentForPath(props.location.pathname)
        // If Comp is used as a component here, it triggers React to re-mount the entire
        // component tree underneath during reconciliation, losing all internal state.
        // By unwrapping it here we keep the real, static component exposed directly to React.
        return Comp && Comp({ ...props, key: props.location.pathname })
      }} />
    )
  }
}

