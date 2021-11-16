const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Types } = Schema;
const { String, Number, Boolean, Array } = Types;

function createConnection() {
  return mongoose.connect("mongodb://localhost:27017/meetups");
}

module.exports = createConnection
