const express = require("express");
const {
  getAllData,
  createData,
  updateData,
} = require("../controllers/sensorData.controller");

const router = express.Router();

router.get("/", getAllData);
router.post("/create", createData);
router.post("/update/:id", updateData);

module.exports = router;
