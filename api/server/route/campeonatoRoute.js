const express = require("express");
const router = express.Router();
const campsService = require("../service/campeonatoService");

router.get("/camps", async function (req, res, next) {
  try {
    const camps = await campsService.getCamps();
    res.json(camps);
  } catch (e) {
    next(e);
  }
});

router.get("/camps/:id", async function (req, res, next) {
  const idCamp = req.params.id;
  try {
    const camps = await campsService.getCamp(idCamp);
    res.json(camps);
  } catch (e) {
    next(e);
  }
});

router.post("/camps", async function (req, res, next) {
  const camp = req.body;
  try {
    const newCamp = await campsService.saveCamp(camp);
    res.status(201).json(newCamp);
  } catch (e) {
    next(e);
  }
});

router.put("/camps/:id", async function (req, res, next) {
  const camp = req.body;
  try {
    await campsService.updateCamp(req.params.id, camp);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

router.delete("/camps/:id", async function (req, res, next) {
  try {
    await campsService.deleteCamp(req.params.id);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

module.exports = router;
