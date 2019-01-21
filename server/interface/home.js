const Router = require('koa-router')

const homeRouter = new Router({
  prefix: '/home'
})

homeRouter.get('/articles', ctx => {
  console.log(ctx.query)
  ctx.body = ['node', 'vue', 'react', 'java']
})

module.exports = homeRouter
