<<<<<<< HEAD
const pokemonModel = require("../models/pokemonModel");

const getAllPokemon = (req, res) => {
  const pokemons = pokemonModel.getPokemon();
=======
const pokemonModel = require("../models/pokemonsModel");

const getAllPokemon = (req, res) => {
  const pokemons = pokemonModel.getPokemons();
>>>>>>> 511711a8fb27a7dd55fd07ef4092c4eb0740912f
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

<<<<<<< HEAD
const createNewPokemon = (req, res) => {
  const { name, type, power, description } = req.body;
  pokemonModel.createPokemon(name, type);
  res.redirect("/"); // Redireciona para a lista de Pokémon após a criação
};

module.exports = { getAllPokemon, getPokemon, createNewPokemon };
=======
module.exports = { getAllPokemon, getPokemons };
>>>>>>> 511711a8fb27a7dd55fd07ef4092c4eb0740912f
