const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img:  { type: String, required: true },
    readyToFight: Boolean
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;