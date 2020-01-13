import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import loadable from '@loadable/component';
import '../assets/scss/common.scss';

const HomeView = (props: any) => {
  const pathName = props.location;
  return (
    <div>
      <Route path="/home" component={loadable(() => import('../containers/home'))}></Route>
      <Route path="/chat" component={loadable(() => import('../containers/chat'))}></Route>
      <Route path="/settings" component={loadable(() => import('../containers/setings'))}></Route>
      <Route component={loadable(() => import('../containers/controllBar'))}></Route>
    </div>
  )
}

const getRouter = () => {
  return (
    <HashRouter>
      <div className="za-time-fm-container">
        <Switch>
          <Route path="/login" component={loadable(() => import('../containers/login'))}></Route>
          <Route path="/register" component={loadable(() => import('../containers/register'))}></Route>
          <Route path="/" component={HomeView}></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default getRouter;