const router = require('koa-router')();

router.get('/mock/f/getLoginInfo', async (ctx, next) => {
  console.log('enter into getLoginInfo');
  ctx.body = "首页";
  next();
});

module.exports = router;
