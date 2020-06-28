const orm = require('../config/orm.js')

const burger = {
    selectAll: (devoured) => {return orm.selectAll('burgers',devoured)},
    insertOne:(addBurger) => {orm.insertOne('burgers', [0, addBurger, false] )},
    updateOne:() => {}
}


module.exports = burger