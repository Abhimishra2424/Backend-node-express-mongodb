const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Types } = Schema;
const { String } = Types;

const meeetupSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Meetup = mongoose.model("Meetup", meeetupSchema);

module.exports = { Meetup };
