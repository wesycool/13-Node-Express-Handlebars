const connection = require('./connection.js')

const orm = {
    selectAll: (tableInput,devoured) => {
        const result = connection.query("SELECT * FROM ?? WHERE devoured = ?", [tableInput, devoured])
        return result
    },
    insertOne: (tableInput,addBurger) => {
        connection.query("INSERT INTO ?? VALUES(?, DEFAULT)", [tableInput, addBurger])
    },
    updateOne: () => {''}
}

module.exports = orm