const fs = require('fs')
const Koa = require('koa')
const Router = require('@koa/router')
const axios = require('axios')
const app = new Koa()
const router = new Router()
const port = process.env.HTTP_PORT || 3000

router.get('/', async (ctx, next) => {
    const res = await axios.get('http://pingpong-svc/')
    ctx.body = `${process.env.MESSAGE}\n${fs.readFileSync('/tmp/log').toString()}\n${res.data}`
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(port)
console.log(`Server started in port ${port}`)