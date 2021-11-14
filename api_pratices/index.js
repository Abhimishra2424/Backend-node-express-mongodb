const express = require("express");
const { registerMiddleware } = require("./middlewares");
const courseRouter = require("./routers/course");
const app = express();
registerMiddleware(app);
const PORT = 3000;

app.get("/", (req, res) => {
  res.json("Hello World");
});

// // http://localhost:3000/api/course
app.use("/api/course", courseRouter);

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
