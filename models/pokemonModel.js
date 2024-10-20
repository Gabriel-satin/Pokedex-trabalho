const pokemons = [
  { id: 1, nome: "Bulbassauro", tipo: "Vegetal/Veneno" },
  { id: 2, nome: "Squirtle", tipo: "Água" },
  { id: 3, nome: "Charmander", tipo: "Fogo" },
];

const getPokemons = () => pokemons;
const getPokemonsByid = (id) => pokemons.find((p) => p.id === parseInt(id));
const createPokemon = (nome, tipo) =>
  pokemons.push(pokemons.lenght + 1, nome, tipo);

mode = ule.exports = { getPokemons, getPokemonByid, createPokemon };
