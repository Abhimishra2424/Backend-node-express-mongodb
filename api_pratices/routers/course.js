const express = require("express");
const courseRouter = express.Router();
// based url
// // http://localhost:3000/api/course
// "/api/course"

const courses = [
  {
    id: 1,
    name: "course1",
  },
  {
    id: 2,
    name: "course2",
  },
  {
    id: 3,
    name: "course3",
  },
];

// // http://localhost:3000/api/course
courseRouter.get("/", (req, res) => {
  res.json({ courses });
});

courseRouter.get("/:id", (req, res) => {
  //  The find() method returns the value of the first element in the provided array that satisfies
  // the provided testing function. If no values satisfy the testing function, undefined is returned.

  /*  const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element === 5);

console.log(found);
// expected output: 5

*/
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found");
  res.json(course);
});

courseRouter.delete("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found");
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

courseRouter.post("/", (req, res) => {
  const course = req.body;
  console.log(course);
  const courseId = courses.length + 1;

  courses.push(courses);

  res.json(course);
});

module.exports = courseRouter;
