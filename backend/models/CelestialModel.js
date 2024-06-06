import mongoose from "mongoose";

const { Schema, model } = mongoose;

const celestialSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  surfaceTemperature: {
    type: Map,
    of: String,
    required: true,
  },
  weatherClimate: {
    type: String,
    required: true,
  },
  travelTime: {
    type: String,
    required: true,
  },
  curiosa: [
    {
      type: String,
      required: true,
    },
  ],
});

const CelestialModel = model("CelestialModel", celestialSchema);

export default CelestialModel;
