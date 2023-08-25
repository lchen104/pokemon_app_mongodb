const mongoose = require('mongoose');

const pokedexesSchema = new mongoose.Schema({
    number: { type: String, required: true},
    name:  { type: String, required: true },
    slug:  { type: String, required: true },
    weight:  { type: String, required: true },
    height:  { type: String, required: true },
    abilities:  { type: Array, required: true },
    weakness:  { type: Array, required: true },
    type:  { type: Array, required: true },
    img:  { type: String, required: true },
    ThumbnailAltText:  { type: String, required: true },
    ThumbnailImage:  { type: String, required: true }
});

const Pokedexes = mongoose.model('Pokedexes', pokedexesSchema);

module.exports = Pokedexes;