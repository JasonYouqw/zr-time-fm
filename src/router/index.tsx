import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter,
  // Route,
  Switch
} from 'react-router-dom';
import {Router, Route} from 'react-router';
import {
  Provider,
} from 'react-redux';
import { createBrowserHistory } from 'history';
import loadable from '@loadable/component';
import '../assets/scss/common.scss';

import store from '../redux/Store';

const HomeView = (props: any) => {
  const pathName = props.location;
  return (
    <>
      <Route path="/home" component={loadable(() => import('../containers/home'))}></Route>
      <Route path="/chat" component={loadable(() => import('../containers/chat'))}></Route>
      <Route path="/publish" component={loadable(() => import('../containers/publish'))}></Route>
      <Route path="/settings" component={loadable(() => import('../containers/settings'))}></Route>
      <Route component={loadable(() => import('../containers/controllBar'))}></Route>
    </>
  )
}

const ChatView = (props: any) => {
  const pathName = props.location;
  return (
    <>
      <Route path="/chat/"></Route>
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

const history = createBrowserHistory();

const getRouter = () => {
  initScale();
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>测试登录</div>
        <Route path="/login" component={loadable(() => import('../containers/login'))}></Route>
        <Route path="/register" component={loadable(() => import('../containers/register'))}></Route>
        <Route path="/chatWindow" component={loadable(() => import('../components/chatMoments/chatWindow'))}></Route>
        <Route path="/" component={HomeView}></Route>
      </Router>
    </Provider>
    // <HashRouter>
    //   <div className="za-time-fm-container">
    //     <Switch>
    //       <Route path="/login" component={loadable(() => import('../containers/login'))}></Route>
    //       <Route path="/register" component={loadable(() => import('../containers/register'))}></Route>
    //       <Route path="/chatWindow" component={loadable(() => import('../components/chatMoments/chatWindow'))}></Route>
    //       <Route path="/" component={HomeView}></Route>
    //     </Switch>
    //   </div>
    // </HashRouter>
  );
}

export default getRouter;
