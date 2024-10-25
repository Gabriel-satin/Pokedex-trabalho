const express = require("express");
<<<<<<< HEAD
const router = express.Router();
=======
const router = express.Rputer();
>>>>>>> 511711a8fb27a7dd55fd07ef4092c4eb0740912f
const pokemonController = require("../controllers/pokemonController");

router.get("/", pokemonController.getAllPokemon);
router.get("/pokemon/:id", pokemonController.getPokemon);
<<<<<<< HEAD
router.post("/submit-pokemon", pokemonController.createNewPokemon); // Nova rota para o POST
=======
>>>>>>> 511711a8fb27a7dd55fd07ef4092c4eb0740912f

module.exports = router;
