const SensorModel = require("../models/sensorData.model");

async function getAllData(req, res) {
  try {
    const sensorFound = await SensorModel.find();

    if (!sensorFound)
      return res
        .status(404)
        .send({ message: "no sensor found please create one" });

    return res
      .status(200)
      .send({ message: "sensor found ", data: sensorFound });
  } catch (error) {
    console.log("Error getting datas", error);
    res.status(500).send({ "Error getting datas": error });
  }
}
async function createData(req, res) {
  try {
    const newSensor = await SensorModel.create({
      ...req.body,
    });

    if (!newSensor)
      return res.status(500).send({ message: "fail to create sensor" });

    await newSensor.save;

    return res
      .status(201)
      .send({ message: "sensor created successfully...", data: newSensor });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ error: error });
  }
  res.send("welcome to create route");
}
async function updateData(req, res) {
  try {
    const id = req.params.id;
    const updatedSensor = await SensorModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!updatedSensor)
      return res.status(404).send({ message: "can not find sensor" });
    return res
      .status(200)
      .send({ message: "updated successfully...", data: updatedSensor });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ error: error });
  }
}

module.exports = { getAllData, createData, updateData };
