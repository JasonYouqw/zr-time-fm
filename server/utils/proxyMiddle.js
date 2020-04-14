const path = require('path');
const static = require('koa-static');
const { createProxyMiddleware } = require('http-proxy-middleware');
const koa2Connect = require('koa2-connect');

// 代理兼容封装
const proxy = (context, options) => {
  if (typeof options === 'string') {
    options = {
      target: options,
    };
  }
  return async (ctx, next) => {
    await koa2Connect(createProxyMiddleware(context, options))(ctx, next);
  }
}

/**
 * @param {*} app 
 * @param {*} proxyTable
 * const defaultProxyTable = {
    '/api': {
      target: 'http://localhost:3333',
      changeOrigin: true
    }
  }
 */
const proxyMiddle = (app, proxyTable) => {
  // 引入静态文件
  // app.use(static(path.join(__dirname, 'dist')));
  Object.keys(proxyTable).forEach((context) => {
    const options = proxyTable[context];
    app.use(proxy(context, options));
  });
};

module.exports = proxyMiddle;
