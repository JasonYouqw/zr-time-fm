const Koa = require('koa');
const Webpack = require('webpack');
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
// const proxyMiddle = require('http-proxy-middleware');
const config = require('./confg');
const proxyMiddle = require('./server/utils/proxyMiddle');
const WebpackDevServer = require('webpack-dev-server');
const KoaRouter = require('koa-router');
const socketIo = require('socket.io');
const fs = require('fs');

// 创建http服务
const app = new Koa();

global.DEPLOY_ENV = process.env.DEPLOY_ENV;

// 初始化webpack
const webpackconfig = require('./build/webpack.base.config.js');
const compiler = Webpack(webpackconfig);
// const devMiddleware = require('./build/webpack-dev-middleware.js');
// const hotMiddleware = require('./build/webpack-hot-middleware.js');
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

// render index.html
app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  const indexFile = await fs.readFileSync('./index.html');
  // console.log(`indexFile:${indexFile}`);
  ctx.response.body = indexFile;
})

// socket
// http://127.0.0.1:8080/#/chat
// socket.io 连接
// const io = socketIo(app);
// io.on('connection', (socket) => {
//   console.log('socket客户端已经连接');
//   socket.on('test news event', (msg) => {
//     console.log(`msg: ${msg}`);
//     socket.emit('news', {
//       server: msg
//     });
//   });
// });

// 监听http服务
app.listen(8080, () => {
  console.log('app listen on port 8080!\n');
});
