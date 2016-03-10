import React from 'react'
import { Route, IndexRoute } from 'react-router'

export default function getRoutes () {
  return (
    <Route path='/' component={require('./views/Framework').default}>
      <IndexRoute component={require('./views/Index').default} />
      <Route path='components'>
        <Route path='view' component={require('./views/Components/View').default} />
        <Route path='pages' component={require('./views/Components/Pages').default} />
        <Route path='transitionpages' component={require('./views/Components/TransitionPages').default} />
        <Route path='transitionpagesright' component={require('./views/Components/TransitionPagesRight').default} />
        <Route path='transitionpagesup' component={require('./views/Components/TransitionPagesUp').default} />
      </Route>
      <Route path='*' component={require('./views/NotFound').default} status={404} />
    </Route>
  )
}
