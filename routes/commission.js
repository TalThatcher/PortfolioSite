const express = require('express')
const router = express.Router()
const submitFormController = require('../controllers/submitform')

router.get('/', submitFormController.getCommission)

router.post('/submit', submitFormController.sendRequest)

module.exports = router