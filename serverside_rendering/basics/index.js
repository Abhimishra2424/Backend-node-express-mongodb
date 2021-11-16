const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/students", (req, res) => {
  res.sendFile(__dirname + "/student.html");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
