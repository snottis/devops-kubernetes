const Koa = require('koa')
const app = new Koa()
const port = process.env.HTTP_PORT || 3000


app.listen(port)
console.log(`Server started in port ${port}`)
