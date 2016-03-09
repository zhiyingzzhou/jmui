import React from 'react'
import { Route, IndexRoute } from 'react-router'

export default function getRoutes () {
  return (
    <Route path='/' component={require('./views/Framework').default}>
      <IndexRoute component={require('./views/Index').default} />
      <Route path='*' component={require('./views/NotFound').default} status={404} />
    </Route>
  )
}
