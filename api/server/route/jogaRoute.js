const express = require("express");
const router = express.Router();
const jogaService = require("../service/jogaService");

router.get("/jogo", async function (req, res, next) {
  try {
    const jogo = await jogaService.getJogos();
    res.json(jogo);
  } catch (e) {
    next(e);
  }
});

router.get("/jogo/:id", async function (req, res, next) {
  const PidPartida = req.params.id;
  try {
    const jogo = await jogaService.getJogo(PidPartida);
    res.json(jogo);
  } catch (e) {
    next(e);
  }
});

router.post("/jogo", async function (req, res, next) {
  const jogo = req.body;
  try {
    const newJogo = await jogaService.saveJogo(jogo);
    res.status(201).json(newJogo);
  } catch (e) {
    next(e);
  }
});

router.delete("/jogo/:id", async function (req, res, next) {
  try {
    await jogaService.deleteJogo(req.params.id);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

module.exports = router;