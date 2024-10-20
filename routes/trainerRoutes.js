const express = require("express");
const router = express.Router();
const trainerController = require("../controllers/trainerController");

router.get("/", trainerController.getAllTrainers);
router.get("/trainer/:id", trainerController.getTrainer);
router.post("/submit-trainer", trainerController.createNewTrainer);

module.exports = router;
