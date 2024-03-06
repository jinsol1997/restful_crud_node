const actorService = require('../services/actorService');

const actorController = {

    async getAllActors(req, res) {

      try {

        const actors = await actorService.getAllActors();
        res.status(200).json(actors);

      } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Internal server error' });

      }
    },
  
    async getActorById(req, res) {

      const id = req.params.id;

      try {

        const actor = await actorService.getActorById(id);
        if (!actor) {
          return res.status(404).json({ error: 'Actor not found' });
        }
        res.status(200).json(actor);

      } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Internal server error' });

      }
    },
  
    async createActor(req, res) {

      const { first_name, last_name } = req.body;

      try {

        const newActor = await actorService.createActor(first_name, last_name);
        res.status(201).json(newActor);

      } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Internal server error' });

      }
    },
  
    async updateActor(req, res) {

      const id = req.params.id;
      const { first_name, last_name } = req.body;

      try {

        const actor = await actorService.getActorById(id);
        if (!actor) {
          return res.status(404).json({ error: 'Actor not found' });
        }

        const updatedActor = await actorService.updateActor(id, first_name, last_name);
        res.status(200).json(updatedActor);

      } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Internal server error' });

      }
    },
  
    async deleteActor(req, res) {

      const id = req.params.id;

      try {

        const actor = await actorService.getActorById(id);
        if (!actor) {
          return res.status(404).json({ error: 'Actor not found' });
        }

        await actorService.deleteActor(id);
        res.status(204).send();

      } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Internal server error' });

      }
    }
  };
  
  module.exports = actorController;