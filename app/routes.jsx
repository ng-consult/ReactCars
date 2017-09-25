import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Home from 'containers/Home';
import About from 'containers/About';
import Search from 'containers/Search';
import GoogleImageFrame from 'containers/GoogleImageFrame';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="search" component={Search} />
      <Route path="car/:make/:model" component={GoogleImageFrame}/>
    </Route>
  );
};
