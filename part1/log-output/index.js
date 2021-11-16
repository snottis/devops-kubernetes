const uuid = require('uuid')
const id = uuid.v4()

setInterval(() =>{
    console.log(`${new Date(Date.now()).toISOString()} ${id}`)
}, 5000)