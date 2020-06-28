const express = require('express')
const burger = require('../models/burger.js')

const router = express.Router();

// GET '/' - Render data at startup
router.get('/', async function(req,res){
    const burgerList = await burger.selectAll(false)
    const devouredList = await burger.selectAll(true)
    res.render('index', {burgerList,devouredList})
})

// POST '/api/ - Insert data into SQL
router.post('/api/:data', async function(req,res){
    await burger.insertOne(req.params.data)
})

module.exports = router