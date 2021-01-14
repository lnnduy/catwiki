const { Schema, model } = require("mongoose");

const breedSchema = new Schema(
  {
    breedId: {
      type: String,
      index: true,
    },
    name: {
      type: String,
      index: true,
    },
    search: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
);

module.exports = model("breed", breedSchema);
