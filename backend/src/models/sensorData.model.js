const mongoose = require("mongoose");

const sensorSchema = mongoose.Schema(
  {
    plantOne: {
      type: String,
      required: true,
    },
    plantTwo: {
      type: String,
      required: true,
    },
    plantThree: {
      type: String,
      required: true,
    },
    plantFour: {
      type: String,
      required: true,
    },

    tankLevel: {
      type: String,
      required: true,
    },
    tankTapState: {
      type: String,
      required: true,
    },
    plantOneWaterTap: {
      type: String,
      required: true,
    },
    plantTwoWaterTap: {
      type: String,
      required: true,
    },
    plantThreeWaterTap: {
      type: String,
      required: true,
    },
    plantFourWaterTap: {
      type: String,
      required: true,
    },

    enviromentTemp: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "createdAtField", updatedAt: "date" },
  }
);

const SensorModel = mongoose.model("sensor", sensorSchema);

module.exports = SensorModel;
