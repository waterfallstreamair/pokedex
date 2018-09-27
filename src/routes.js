import React from 'react'
import { Route, Switch } from 'react-router'
import ListPage from './pages/ListPage'

/*
 @see https://github.com/supasate/connected-react-router/blob/master/FAQ.md
 */
const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={ListPage} />
    </Switch>
  </div>
)

export default routes
