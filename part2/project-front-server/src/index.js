const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')
const app = new Koa()
const port = process.env.HTTP_PORT || 3000

app.use(serve(path.join(__dirname, '../public')))

app.listen(port)
console.log(`Server started in port ${port}`)