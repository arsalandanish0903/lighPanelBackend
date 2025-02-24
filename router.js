const express = require("express")

// wall1
const Wall1LightController = require("./Controller/Wall1Controller")
const Wall1BollardsController = require("./Controller/Wall1Controller")

// wall2
const lightController = require("./Controller/Wall2Controller")
const bollardsController = require("./Controller/Wall2Controller")

// wall3
const Wall3LightController = require("./Controller/Wall3Controller")
const Wall3BollardsController = require("./Controller/Wall3Controller")

// wall4
const Wall4LightController = require("./Controller/Wall4Controller")
const Wall4BollardsController = require("./Controller/Wall4Controller")

const router = express.Router()

// wall2
router.get('/data', lightController.LightsGetAll)
router.post('/add', lightController.postAllLights)
router.put('/update', lightController.updateLightsData)
router.get('/getLightId/:id', lightController.lightsGetById)

router.get('/bollarddata', bollardsController.BollardsGetAll)
router.post('/addb', bollardsController.bollardsPost)
router.put('/updateB', bollardsController.updateBollardsData)
router.get('/getbId/:id', bollardsController.bollardsGetById)

// wall1
router.get('/data1', Wall1LightController.Wall1LightsGetAll)
router.post('/add1', Wall1LightController.Wall1postAllLights)
router.put('/update1', Wall1LightController.Wall1updateLightsData)
router.get('/getLightId1/:id', Wall1LightController.Wall1lightsGetById)

router.get('/bollarddata1', Wall1BollardsController.Wall1BollardsGetAll)
router.post('/addb1', Wall1BollardsController.Wall1bollardsPost)
router.put('/updateB1', Wall1BollardsController.Wall1updateBollardsData)
router.get('/getbId1/:id', Wall1BollardsController.Wall1bollardsGetById)


// wall3
router.get('/data3', Wall3LightController.Wall3LightsGetAll)
router.post('/add3', Wall3LightController.Wall3postAllLights)
router.put('/update3', Wall3LightController.Wall3updateLightsData)
router.get('/getLightId3/:id', Wall3LightController.Wall3lightsGetById)

router.get('/bollarddata3', Wall3BollardsController.Wall3BollardsGetAll)
router.post('/addb3', Wall3BollardsController.Wall3bollardsPost)
router.put('/updateB3', Wall3BollardsController.Wall3updateBollardsData)
router.get('/getbId3/:id', Wall3BollardsController.Wall3bollardsGetById)


// wall4
router.get('/data4', Wall4LightController.Wall4LightsGetAll)
router.post('/add4', Wall4LightController.Wall4postAllLights)
router.put('/update4', Wall4LightController.Wall4updateLightsData)
router.get('/getLightId4/:id', Wall4LightController.Wall4lightsGetById)

router.get('/bollarddata4', Wall4BollardsController.Wall4BollardsGetAll)
router.post('/addb4', Wall4BollardsController.Wall4bollardsPost)
router.put('/updateB4', Wall4BollardsController.Wall4updateBollardsData)
router.get('/getbId4/:id', Wall4BollardsController.Wall4bollardsGetById)



// router.get('/getOrder/:id', bollardsController.GetOrder)
// router.post('/addOrder', bollardsController.newOrder)

module.exports = router