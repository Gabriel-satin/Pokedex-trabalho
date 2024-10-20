const trainers = [];

const getAllTrainers = () => trainers;

const getTrainerById = (id) => trainers.find(t => t.id === parseInt(id));

const createTrainer = (name, pokemonList) => {
  const newId = trainers.length + 1;
  trainers.push({ id: newId, name, pokemonList });
};

module.exports = { getAllTrainers, getTrainerById, createTrainer };
