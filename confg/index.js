module.exports = {
  build: {

  },
  dev: {
    proxyTable: {
      '/api': {
        target: 'http://za-open-productmarket-h5-bff.test.za.biz/',
        changeOrigin: true,
      },
      '/promote': {
        target: 'http://openplatform-open-za-open-promote-product.test.za.biz/',
        changeOrigin: true,
      },
      '/product': {
        target: 'http://2480-openplatform-open-za-open-productmarket-engine.test.za.biz/',
        changeOrigin: true,
      },
    },
  },
};
