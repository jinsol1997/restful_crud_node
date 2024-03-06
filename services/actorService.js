const Actor = require('../models/Actor');

const actorService = {

  async getAllActors() {
    return await Actor.findAll();
  },

  async getActorById(id) {
    return await Actor.findByPk(id);
  },

  async createActor(firstName, lastName) {
    return await Actor.create({ first_name: firstName, last_name: lastName });
  },

  async updateActor(id, firstName, lastName) {
    const actor = await Actor.findByPk(id);
    actor.first_name = firstName;
    actor.last_name = lastName;
    return await actor.save();
  },

  async deleteActor(id) {
    const actor = await Actor.findByPk(id);
    return await actor.destroy();
  }
};

module.exports = actorService;