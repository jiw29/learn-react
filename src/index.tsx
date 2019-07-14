import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
// import PageLayout from './page/PageLayout';
import SiginPage from './page/SigninPage';
import PublicPage from './page/PublicPage';
import ProtectedPage from './page/ProtectedPage';

ReactDom.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact={true}
        component={SiginPage}
      />
      <Route
        path="/signin"
        exact={true}
        component={SiginPage}
      />
      <Route
        path="/public"
        exact={true}
        component={PublicPage}
      />
      <PrivateRoute
        path="/protected"
        exact={true}
        component={ProtectedPage}
      />
      <PrivateRoute
        path="/protected2"
        exact={true}
        component={ProtectedPage}
      />
    </Switch>
  </BrowserRouter>
  , document.getElementById('app')
);
