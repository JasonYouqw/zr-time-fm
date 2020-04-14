const Koa = require('koa');
const Webpack = require('webpack');
const path = require('path');
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
const config = require('./confg');
const proxyMiddle = require('./server/utils/proxyMiddle');
const router = require('./server/router');
const koaEjs = require('koa-ejs');
const fs = require('fs');

// 创建http服务
const app = new Koa();

global.DEPLOY_ENV = process.env.DEPLOY_ENV;

// 初始化webpack
const webpackconfig = require('./build/webpack.base.config.js');
const compiler = Webpack(webpackconfig);
if (module.hot) {
  module.hot.accept()
}

// webpack dev build
app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackconfig.output.publicPath
}));

// hot load
app.use(hotMiddleware(compiler, {
  reload: true
}));

// http api proxy
proxyMiddle(app, config.dev.proxyTable);

// ejs
koaEjs(app, {
  root: path.join(__dirname, 'server/view'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: false
});

// router
app.use(router.routes());
app.use(router.allowedMethods());

// render index.html
// app.use(async (ctx, next) => {
//   await next();
//   ctx.response.type = 'text/html';
//   const indexFile = await fs.createReadStream('./index.html');
//   ctx.response.body = indexFile;
// });

// 监听http服务
app.listen(8080, () => {
  console.log('app listen on port 8080!\n');
});
