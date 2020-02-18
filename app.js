const Koa = require('koa');
const Webpack = require('webpack');
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
const WebpackDevServer = require('webpack-dev-server');
const KoaRouter = require('koa-router');
const socketIo = require('socket.io');
const fs = require('fs');

// 创建http服务
const app = new Koa();

// 初始化webpack
const config = require('./build/webpack.base.config.js');
const compiler = Webpack(config);
if (module.hot) {
  module.hot.accept()
}
app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(hotMiddleware(compiler, {
  reload: true
}));

app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  const indexFile = await fs.readFileSync('./dist/index.html');
  console.log(`indexFile:${indexFile}`);
  ctx.response.body = indexFile;
})
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
