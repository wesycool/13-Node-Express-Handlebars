const connection = require('./connection.js')

const orm = {
    selectAll: (tableInput,devoured) => {
        const result = connection.query("SELECT * FROM ?? WHERE devoured = ?", [tableInput, devoured])
        return result
    },
    insertOne: () => {''},
    updateOne: () => {''}
}

module.exports = orm