const express = require("express")
const lightController = require("./controller")
const bollardsController = require("./controller")

const router = express.Router()

router.get('/data', lightController.getUser)
router.post('/add', lightController.postUser)
router.put('/update', lightController.updateUser)
router.get('/getLightId/:id', lightController.lightsGetUSer)

router.get('/bollarddata', bollardsController.bollardsGetUser)
router.post('/addb', bollardsController.bollardsPostUser)
router.put('/updateB', bollardsController.updateBollardsUser)
router.get('/getbId/:id', bollardsController.bollardsGetUserById)

module.exports = router