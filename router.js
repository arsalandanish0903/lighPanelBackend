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

// wall5
const Wall5LightController = require("./Controller/Wall5Controller")
const Wall5BollardsController = require("./Controller/Wall5Controller")

// Hybec1
const Hybec1Controller = require("./Controller/Hybec1Controller")

// Hybec2
const Hybec2Controller = require("./Controller/Hybec2Controller")

// Gatelight
const GatelightController = require("./Controller/GatelightController")

// Hanging1
const Hanging1Controller = require("./Controller/Hanging1Controller")

// Hanging2
const Hanging2Controller = require("./Controller/Hanging2Controller")

// Nirvana1
const Nirvana1Controller = require("./Controller/Nirvana1Controller")

// Nirvana2
const Nirvana2Controller = require("./Controller/Nirvana2Controller")

// Philips
const PhilipsController = require("./Controller/philipsController")

// Fan1
const Fan1Controller = require("./Controller/Fan1Controller")
const Fan1LightController = require("./Controller/Fan1Controller")
const Fan1TubeLightController = require("./Controller/Fan1Controller")

// Fan3
const Fan3Controller = require("./Controller/Fan3Controller")
const Fan3LightController = require("./Controller/Fan3Controller")



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

// wall5
router.get('/data5', Wall5LightController.Wall5LightsGetAll)
router.post('/add5', Wall5LightController.Wall5postAllLights)
router.put('/update5', Wall5LightController.Wall5updateLightsData)
router.get('/getLightId5/:id', Wall5LightController.Wall5lightsGetById)

router.get('/bollarddata5', Wall5BollardsController.Wall5BollardsGetAll)
router.post('/addb5', Wall5BollardsController.Wall5bollardsPost)
router.put('/updateB5', Wall5BollardsController.Wall5updateBollardsData)
router.get('/getbId5/:id', Wall5BollardsController.Wall5bollardsGetById)

// Hybec1
router.get('/dataH1', Hybec1Controller.H1LightsGetAll)
router.post('/addH1', Hybec1Controller.H1postAllLights)
router.put('/updateH1', Hybec1Controller.H1updateLightsData)
router.get('/getLightIdH1/:id', Hybec1Controller.H1lightsGetById)

// Hybec2
router.get('/dataH2', Hybec2Controller.H2LightsGetAll)
router.post('/addH2', Hybec2Controller.H2postAllLights)
router.put('/updateH2', Hybec2Controller.H2updateLightsData)
router.get('/getLightIdH2/:id', Hybec2Controller.H2lightsGetById)


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

// Nirvana1
router.get('/dataNirvana1', Nirvana1Controller.Nirvana1LightsGetAll)
router.post('/addNirvana1', Nirvana1Controller.Nirvana1postAllLights)
router.put('/updateNirvana1', Nirvana1Controller.Nirvana1updateLightsData)
router.get('/getLightIdNirvana1/:id', Nirvana1Controller.Nirvana1lightsGetById)

// Nirvana2
router.get('/dataNirvana2', Nirvana2Controller.Nirvana2LightsGetAll)
router.post('/addNirvana2', Nirvana2Controller.Nirvana2postAllLights)
router.put('/updateNirvana2', Nirvana2Controller.Nirvana2updateLightsData)
router.get('/getLightIdNirvana2/:id', Nirvana2Controller.Nirvana2lightsGetById)

// Philips
router.get('/dataPhilips', PhilipsController.P1LightsGetAll)
router.post('/addPhilips', PhilipsController.P1postAllLights)
router.put('/updatePhilips', PhilipsController.P1updateLightsData)
router.get('/getLightIdPhilips/:id', PhilipsController.P1lightsGetById)

// Fan1
router.get('/dataF1', Fan1Controller.Fan1GetAll)
router.post('/addF1', Fan1Controller.Fan1postAllLights)
router.put('/updateF1', Fan1Controller.Fan1updateLightsData)
router.get('/getLightIdF1/:id', Fan1Controller.Fan1LightGetById)

router.get('/bollarddataFl1', Fan1LightController.Fan1LightGetAll)
router.post('/addFl1', Fan1Controller.Fan1LightPost)
router.put('/updateFl1', Fan1Controller.Fan1updateLightsData)
router.get('/getbIdFl1/:id', Fan1Controller.Fan1LightGetById)


router.get('/dataF1T', Fan1TubeLightController.TubeLightsGetAll)
router.post('/addF1T', Fan1TubeLightController.TubepostAllLights)
router.put('/updateF1T', Fan1TubeLightController.TubeupdateLightsData)
router.get('/getLightIdF1T/:id', Fan1TubeLightController.TubelightsGetById)



// Fan3
router.get('/dataF3', Fan3Controller.Fan3GetAll)
router.post('/addF3', Fan3Controller.Fan3postAllLights)
router.put('/updateF3', Fan3Controller.Fan3updateLightsData)
router.get('/getLightIdF3/:id', Fan3Controller.Fan3LightGetById)

router.get('/bollarddataFl3', Fan3LightController.Fan3LightGetAll)
router.post('/addFl3', Fan3Controller.Fan3LightPost)
router.put('/updateFl3', Fan3Controller.Fan3updateLightsData)
router.get('/getbIdFl3/:id', Fan3Controller.Fan3LightGetById)

// router.get('/getOrder/:id', bollardsController.GetOrder)
// router.post('/addOrder', bollardsController.newOrder)

module.exports = router