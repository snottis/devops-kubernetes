const Koa = require('koa')
const Router = require('@koa/router')
const app = new Koa()
const router = new Router()
const port = process.env.HTTP_PORT || 3000

router.get('/', (ctx, next) => {
    ctx.body = 'Hello World!'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(port)
console.log(`Server started in port ${port}`)
