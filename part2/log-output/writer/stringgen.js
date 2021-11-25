const uuid = require('uuid')
const id = uuid.v4()

module.exports = () => {
    return `${new Date(Date.now()).toISOString()} ${id}`
}