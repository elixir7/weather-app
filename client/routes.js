//This is the routes when you are inside the app.
import React from 'react'
import { Route, IndexRoute } from 'react-router'

//Base styling that applies to all pages
import App from '../components/app'

//Pages
import TheApp from '../components/theapp'
import Design from '../components/design'
import JavaScript from '../components/js'
import About from '../components/about'

//Everything is wrapped in a route caclled App which contains the nav bar.
//The Index route is the default route which gets renderd when you go to the root.
export default (
  <Route path="/" component={App}>
    <IndexRoute component={TheApp} />
    <Route path="/design" component={Design} />
    <Route path="/js" component={JavaScript} />
    <Route path="/about" component={About} />
  </Route>
);
