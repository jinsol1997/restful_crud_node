const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

router.get('/actors', actorController.getAllActors);

router.get('/actors/:id', actorController.getActorById);

router.post('/actors', actorController.createActor);

router.put('/actors/:id', actorController.updateActor);

router.delete('/actors/:id', actorController.deleteActor);

module.exports = router;