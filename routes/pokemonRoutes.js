const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router.get("/", pokemonController.getAllPokemon);
router.get("/pokemon/:id", pokemonController.getPokemon);
router.post("/submit-pokemon", pokemonController.createNewPokemon); // Nova rota para o POST

module.exports = router;
