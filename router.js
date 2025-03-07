const express = require("express")
const macAuthMiddleware = require("./middlewares/macAuth")
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

// Hybec1
const Hybec1Controller = require("./Controller/Hybec1Controller")

// Gatelight
const GatelightController = require("./Controller/GatelightController")

// Hanging1
const Hanging1Controller = require("./Controller/Hanging1Controller")

// Hanging2
const Hanging2Controller = require("./Controller/Hanging2Controller")

const router = express.Router()
// router.use(macAuthMiddleware)

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

// Hybec1
router.get('/dataH1', Hybec1Controller.H1LightsGetAll)
router.post('/addH1', Hybec1Controller.H1postAllLights)
router.put('/updateH1', Hybec1Controller.H1updateLightsData)
router.get('/getLightIdH1/:id', Hybec1Controller.H1lightsGetById)

// Gatelight

// 1. Gatelight
router.get('/dataGl', GatelightController.GatelightGetAll)
router.post('/addGl', GatelightController.GatelightpostAllLights)
router.put('/updateGl', GatelightController.GatelightupdateLightsData)
router.get('/getLightIdGl/:id', GatelightController.GatelightGetById)

// 2. FootLamp
router.get('/dataFl', GatelightController.FootLampGetAll)
router.post('/addFl', GatelightController.FootLamppostAllLights)
router.put('/updateFl', GatelightController.FootLampupdateLightsData)
router.get('/getLightIdFl/:id', GatelightController.FootLampGetById)

// 3. CellingLight
router.get('/dataCl', GatelightController.CellingLightGetAll)
router.post('/addCl', GatelightController.CellingLightpostAllLights)
router.put('/updateCl', GatelightController.CellingLightupdateLightsData)
router.get('/getLightIdCl/:id', GatelightController.CellingLightGetById)

// 4.GardenSpike
router.get('/dataGs', GatelightController.GardenSpikeGetAll)
router.post('/addGs', GatelightController.GardenSpikepostAllLights)
router.put('/updateGs', GatelightController.GardenSpikeupdateLightsData)
router.get('/getLightIdGs/:id', GatelightController.GardenSpikeGetById)


// Hanging1
router.get('/dataHanging1', Hanging1Controller.Hanging1LightsGetAll)
router.post('/addHanging1', Hanging1Controller.Hanging1postAllLights)
router.put('/updateHanging1', Hanging1Controller.Hanging1updateLightsData)
router.get('/getLightIdHanging1/:id', Hanging1Controller.Hanging1lightsGetById)

// Hanging2
router.get('/dataHanging2', Hanging2Controller.Hanging2LightsGetAll)
router.post('/addHanging2', Hanging2Controller.Hanging2postAllLights)
router.put('/updateHanging2', Hanging2Controller.Hanging2updateLightsData)
router.get('/getLightIdHanging2/:id', Hanging2Controller.Hanging2lightsGetById)


// router.get('/getOrder/:id', bollardsController.GetOrder)
// router.post('/addOrder', bollardsController.newOrder)

module.exports = router