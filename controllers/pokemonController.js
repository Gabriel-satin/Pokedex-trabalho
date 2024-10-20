const pokemonModel = require("../models/pokemonsModel");

const getAllPokemon = (req, res) => {
  const pokemons = pokemonModel.getPokemons();
  res.render("index", { pokemons });
};

const getPokemon = (req, res) => {
  const pokemon = pokemonModel.getPokemonByid(req.params.id);
  if (pokemon) {
    res.render("pokemon", { pokemon });
  } else {
    res.status(404).send("Pokemon não encontrado");
  }
};

module.exports = { getAllPokemon, getPokemons };
