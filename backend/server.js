const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const sensorDataRoute = require("./src/routes/sensorData.route");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("welcome to backend");
});

app.use("/data", sensorDataRoute);

mongoose
  .connect(process.env.MONGoDB_CONNECTION_STRING)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`server started on port: ${PORT}`);
    });
  })
  .catch(() => {
    console.log("error connecting to database");
  });
