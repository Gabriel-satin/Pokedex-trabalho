const trainerModel = require("../models/trainerModel");
const pokemonModel = require("../models/pokemonModel");

const getAllTrainers = (req, res) => {
  const trainers = trainerModel.getAllTrainers();
  const pokemon = pokemonModel.getPokemon(); 
  res.render("trainers", { trainers });
};

const getTrainer = (req, res) => {
  const trainer = trainerModel.getTrainerById(req.params.id);
  if (trainer) {
    res.render("trainer", { trainer });
  } else {
    res.status(404).send("Treinador não encontrado");
  }
};

const createNewTrainer = (req, res) => {
  const { name, pokemonIds } = req.body;
  const pokemons = pokemonModel.getPokemon().filter(p => pokemonIds.includes(p.id.toString()));
  const pokemonList = pokemons.map(p => ({ id: p.id, nome: p.nome, tipo: p.tipo }));

  trainerModel.createTrainer(name, pokemonList);
  res.redirect("/trainers");
};

module.exports = { getAllTrainers, getTrainer, createNewTrainer };
