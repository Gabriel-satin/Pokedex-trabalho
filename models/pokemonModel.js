const pokemons = [
  { id: 1, nome: "Bulbassauro", tipo: "Vegetal/Veneno" },
  { id: 2, nome: "Squirtle", tipo: "Água" },
  { id: 3, nome: "Charmander", tipo: "Fogo" },
];


const getPokemon = () => pokemons;

const getPokemonByid = (id) => pokemons.find(p => p.id === parseInt(id));

const createPokemon = (nome, tipo) => {
  const newId = pokemons.length + 1;
  pokemons.push({ id: newId, nome, tipo });
};
module.exports = { getPokemon, getPokemonByid, createPokemon };

const getPokemons = () => pokemons;
const getPokemonsByid = (id) => pokemons.find((p) => p.id === parseInt(id));
const createPokemons = (nome, tipo) =>
  pokemons.push(pokemons.lenght + 1, nome, tipo);

module.exports = { getPokemons, getPokemonByid, createPokemon };

