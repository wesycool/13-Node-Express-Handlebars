const orm = require('../config/orm.js')

const burger = {
    selectAll: (devoured) => {return orm.selectAll('burgers',devoured)},
    insertOne:() => {},
    updateOne:() => {}
}


module.exports = burger