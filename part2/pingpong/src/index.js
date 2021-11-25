const Koa = require('koa')
const Router = require('@koa/router')
const fs = require('fs')
const app = new Koa()
const router = new Router()
const port = process.env.HTTP_PORT || 3000

let pings = 0

router.get('/', (ctx, next) => {
    // fs.writeFileSync('/ping/log', `Ping / Pongs: ${pings}`)
    ctx.body = `Ping / Pongs: ${pings}`
    ++pings
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(port)
console.log(`Server started in port ${port}`)
