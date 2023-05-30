const router = require('express').Router();

const { getAllData, getData } = require('../controllers/esdata');



router.get('/alldata', getAllData)
router.get('/data', getData)

module.exports = router