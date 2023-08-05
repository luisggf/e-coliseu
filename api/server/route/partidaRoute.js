const express = require("express");
const router = express.Router();
const partidasService = require("../service/partidaService");

router.get("/partida", async function (req, res, next) {
  try {
    const partida = await partidasService.getPartidas();
    res.json(partida);
  } catch (e) {
    next(e);
  }
});

router.get("/partida/:id", async function (req, res, next) {
  const idPartida = req.params.id;
  try {
    const partida = await partidasService.getPartida(idPartida);
    res.json(partida);
  } catch (e) {
    next(e);
  }
});

router.post("/partida", async function (req, res, next){
  const partida = req.body
  try {
    const newPartida = await partidasService.savePartida(partida);
    res.status(201).json(newPartida);
  }catch (e) {
    next(e);
  }
});

router.put("/partida/:id", async function (req, res, next) {
  const partida = req.body;
  try {
    await partidasService.updatePartida(req.params.id, partida);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

router.delete("/partida/:id", async function (req, res, next) {
  try {
    await partidasService.deletePartida(req.params.id);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

module.exports = router;