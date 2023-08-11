const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const campeonatoRoute = require("./route/campeonatoRoute");
const timeRoute = require("./route/timeRoute");
const usuarioRoute = require("./route/usuarioRoute");
const partidaRoute = require("./route/partidaRoute");
const jogaRoute = require("./route/jogaRoute")

app.use("/", campeonatoRoute);
app.use("/", timeRoute);
app.use("/", usuarioRoute);
app.use("/", partidaRoute);
app.use("/", jogaRoute);

// NEW ADDITION TEST BEGIN 07/08
app.post("/addTime", async (req, res) => {
  try {
    const { username, nomeTime, treinador } = req.body;

    // Insert the data into the database
    const result = await db.none(
      "INSERT INTO times (username, nomeTime, treinador) VALUES ($1, $2, $3)",
      [username, nomeTime, treinador]
    );

    res.status(200).json({ message: "Time added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add time" });
  }
});

// NEW ADDITION ENDPOINT

// app.use(function(error, req, res, next){
//   if(error.message === 'Campeonato já existe' || error.message === 'Time já existe'){
//      return res.status(409).send(error.message);
//   }
//   if (error.message === 'Campeonato não encontrado' || error.message === 'Time não encontrado'){
//      return res.status(404).send(error.message);
//   }
//   res.status(500).send(error.message);
// });
app.listen(3000);
