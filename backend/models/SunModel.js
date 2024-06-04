import mongoose from "mongoose";


const { Schema } = mongoose;

const sunSchema = new Schema({
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
  }
});

//The model (based entirely on all entries in the sunSchema)
const SunModel = mongoose.model("SunModel", sunSchema);

export default SunModel;