const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Types } = Schema;
const { String, Number, Boolean, Array } = Types;

mongoose
  .connect("mongodb://localhost:27017/testdb")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const todoSchema = new Schema({
  title: String,
  description: String,
  priority: Number,
});

const Todo = mongoose.model("Todo", todoSchema);

// const todo = new Todo({
//   title: "Learn MongoDB",
//   description: "Learn MongoDB",
//   priority: 1,
// });

// todo.save().then(() => console.log("Saved todo..."));

// Todo.create([
//   {
//     title: "Learn MongoDB",
//     description: "Learn MongoDB",
//     priority: 1,
//   },
//   {
//     title: "Learn NodeJS",
//     description: "Learn NodeJS",
//     priority: 2,
//   },
// ]).then(() => console.log("Saved todo..."));

//Todo.find({}).then((todos) => console.log(todos));

//Todo.find({ description: "Learn NodeJS" }).then((todos) => console.log(todos));

// >>> find give you an array of objects
// Todo.find({ _id: "618fd42a38f502e9ad5c4979" }).then((todos) =>
//   console.log(todos)
// );

// >>> findById give only one result
//Todo.findById("618fd42a38f502e9ad5c4979").then((todo) => console.log(todo));

// Todo.find()
//   .sort("-title")
//   .then((todos) => {
//     todos.forEach((todo) => {
//       console.log(todo.title);
//     });
//   });

//   if we do that we will get desnding order
// .sort("title")
//Learn MongoDB
//Learn NodeJS

// if we do that we will get ascending order
// .sort("-title")
// Learn NodeJS
// Learn MongoDB

// delete one object document by id
// Todo.deleteOne({ _id: "618fd42a38f502e9ad5c4979" }).then(() =>
//   console.log("Deleted")
// );

// findbyIdandUpdate will update the object
// Todo.findByIdAndUpdate("6190df37235bd56b17c5350d", {
//   title: "Learn React",
//   description: "abhi",
//   priority: 5,
// }).then((todo) => console.log(todo));

// const Id = "6190df37235bd56b17c5350d";

// Todo.updateOne({ _id: Id }, { $set: { title: "javascript" } }).then((todo) =>
//   console.log(todo)
// );
// it will update the object

// Todo.findOneAndUpdate(
//   { _id: Id },
//   { $set: { title: "javascript" } },
//   { new: true }
// ).then((todo) => console.log(todo));
// it will find One And Update the object
