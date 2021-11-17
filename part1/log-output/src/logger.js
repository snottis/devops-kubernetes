const logger = async (logfunc) => {
    setInterval(() =>{
        console.log(logfunc())
    }, 5000)
}

module.exports = logger