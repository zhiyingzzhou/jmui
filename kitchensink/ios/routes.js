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
        <Route path='page' component={require('./views/Components/Page').default} />
        <Route path='block' component={require('./views/Components/Block').default} />
        <Route path='grid' component={require('./views/Components/Grid').default} />
        <Route path='button' component={require('./views/Components/Button').default} />
        <Route path='form' component={require('./views/Components/Form').default} />
      </Route>
      <Route path='*' component={require('./views/NotFound').default} status={404} />
    </Route>
  )
}
