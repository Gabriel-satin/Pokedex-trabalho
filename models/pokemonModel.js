const pokemons = [
  { id: 1, nome: "Bulbassauro", tipo: "Vegetal/Veneno" },
  { id: 2, nome: "Squirtle", tipo: "Água" },
  { id: 3, nome: "Charmander", tipo: "Fogo" },
];

<<<<<<< HEAD
const getPokemon = () => pokemons;

const getPokemonByid = (id) => pokemons.find(p => p.id === parseInt(id));

const createPokemon = (nome, tipo) => {
  const newId = pokemons.length + 1;
  pokemons.push({ id: newId, nome, tipo });
};
module.exports = { getPokemon, getPokemonByid, createPokemon };
=======
const getPokemons = () => pokemons;
const getPokemonsByid = (id) => pokemons.find((p) => p.id === parseInt(id));
const createPokemon = (nome, tipo) =>
  pokemons.push(pokemons.lenght + 1, nome, tipo);

mode = ule.exports = { getPokemons, getPokemonByid, createPokemon };
>>>>>>> 511711a8fb27a7dd55fd07ef4092c4eb0740912f
