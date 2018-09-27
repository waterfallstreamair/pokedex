import React from 'react'
import { Route, Switch } from 'react-router'
import Page from './containers/page'

/*
 @see https://github.com/supasate/connected-react-router/blob/master/FAQ.md
 */
const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Page} />
    </Switch>
  </div>
)

export default routes
