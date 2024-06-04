import mongoose from "mongoose";

const { Schema } = mongoose;

const moonSchema = new Schema({
  fact: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
  additional_info: {
    type: String,
    required: true,
  },
});

//The model (based entirely on all entries in the moonSchema)
const SunModel = mongoose.model("SunModel", moonSchema);

export default MoonModel;
