import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading,
});

const Gallery = Loadable({
  loader: () => import('./components/Gallery'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./components/NotFound'),
  loading: Loading,
});

const Routes = () => (
  <BrowserRouter>
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
