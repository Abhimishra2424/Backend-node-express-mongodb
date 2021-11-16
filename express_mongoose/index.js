const express = require("express");
const { meetupRouter } = require("./routers/meetup");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});


app.use("/api/meetups", meetupRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

