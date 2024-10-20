const express = require("express");
const router = express.Rputer();
const pokemonController = require("../controllers/pokemonController");

router.get("/", pokemonController.getAllPokemon);
router.get("/pokemon/:id", pokemonController.getPokemon);

module.exports = router;
