const express=require('express')
const router=express.Router()
const { validateToken } = require("../JWT")

router.get('/validateToken', validateToken)

module.exports = router