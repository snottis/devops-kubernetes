const Koa = require('koa')
const Router = require('@koa/router')
const fs = require('fs')
const mime = require('mime-types')
const axios = require('axios')
const path = require('path')
const bP = require('koa-bodyparser')
const app = new Koa()
app.use(bP())
const router = new Router()
const port = process.env.HTTP_PORT || 3000

const TODOS = []

router.get('/todo', async (ctx) => {
    ctx.body = TODOS
})

router.post('/todo', async (ctx) => {
    TODOS.push({
        description: ctx.request.body["description"],
        done: false
    })
    ctx.status = 201
})

router.get('/dailyimage', async (ctx) => {
    const today = new Date(Date.now()).toISOString().slice(0, 10)
    const path = `/img/${today}.png`
    if (!fs.existsSync(path)) {
        await download('https://picsum.photos/1200', path)
    }
    var mimeType = mime.lookup(path)
    const img = fs.createReadStream(path)
    ctx.response.set('content-type', mimeType)
    ctx.body = img
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(port)
console.log(`Server started in port ${port}`)

const download = async (url, path) => axios({
    url,
    responseType: 'stream'})
    .then(
    response => 
    new Promise((resolve, reject) => {
        response.data
            .pipe(fs.createWriteStream(path))
            .on('finish', () => resolve())
            .on('error', e => reject(e))}))