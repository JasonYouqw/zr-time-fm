const router = require('koa-router')();

router.get('/*', async (ctx, next) => {
  await ctx.render('index', {
    title: '登录',
    body: 'login page'
  });
  next();
});

router.get('/mock/f/getLoginInfo', async (ctx, next) => {
  console.log('enter into getLoginInfo');
  ctx.body = "首页111";
  next();
});

module.exports = router;
