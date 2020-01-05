import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LayoutRoute, EmptyLayout, MainLayout } from "components/Layout";
import AuthPage from "pages/AuthPage";
import {STATE_LOGIN, STATE_SIGNUP} from "components/AuthForm";

import 'semantic-ui-css/semantic.min.css'

import "./App.css";

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));

// const getBasename = () => {
//   return `/${process.env.PUBLIC_URL.split('/').pop()}`;
// }

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
        <LayoutRoute 
          exact
          path="/login"
          layout={EmptyLayout}
          component={props => (
            <AuthPage {...props} authState={STATE_LOGIN} />
          )}
        />
        <LayoutRoute 
          exact
          path="/register"
          layout={EmptyLayout}
          component={props => (
            <AuthPage {...props} authState={STATE_SIGNUP} />
          )}
        />
        <MainLayout>
          <React.Suspense fallback={<div>Loading</div>}>
            <Route exact path="/" component={DashboardPage} />
          </React.Suspense>
        </MainLayout>
       </Switch>
    </BrowserRouter>
  );
}

export default App;
