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
    <>
      <Route path="/home" component={loadable(() => import('../containers/home'))}></Route>
      <Route path="/chat" component={loadable(() => import('../containers/chat'))}></Route>
      <Route path="/settings" component={loadable(() => import('../containers/settings'))}></Route>
      <Route component={loadable(() => import('../containers/controllBar'))}></Route>
    </>
  )
}

const initScale = () => {
  const baseSize = 28;
  const setSize = () => {
    const scale = document.documentElement.clientWidth / 750;
    document.documentElement.style.fontSize = `${baseSize * window.Math.min(scale, 2)}px`;
  }
  setSize();
  window.onresize = () => {
    window.setTimeout(() => {
      setSize();
    }, 10);
  };
}

const getRouter = () => {
  initScale();
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