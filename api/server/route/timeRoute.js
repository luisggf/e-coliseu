const express = require("express");
const router = express.Router();
const timesService = require("../service/timeService");

router.get("/times", async function (req, res, next) {
  try {
    const times = await timesService.getTimes();
    res.json(times);
  } catch (e) {
    next(e);
  }
});

router.get("/times/:id", async function (req, res, next) {
  const idTime = req.params.id;
  try {
    const time = await timesService.getTime(idTime);
    res.json(time);
  } catch (e) {
    next(e);
  }
});

router.post("/times", async function (req, res, next) {
  const time = req.body;
  try {
    const newTime = await timesService.saveTime(time);
    res.status(201).json(newTime);
  } catch (e) {
    next(e);
  }
});

router.put("/times/:id", async function (req, res, next) {
  const time = req.body;
  try {
    await timesService.updateTime(req.params.id, time);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

router.delete("/times/:id", async function (req, res, next) {
  try {
    await timesService.deleteTime(req.params.id);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

module.exports = router;
