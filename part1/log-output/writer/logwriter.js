const fs = require('fs')

const logger = async (logfunc) => {
    setInterval(() =>{
        fs.writeFileSync('/tmp/log', logfunc())
    }, 5000)
}

module.exports = logger