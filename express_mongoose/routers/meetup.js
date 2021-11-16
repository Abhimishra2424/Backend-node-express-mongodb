const express = require("express");
const {
  DeleteMeetup,
  getAllMeetup,
  getAllMeetupById,
  CreateMeetup,
  UpdateMeetup,
} = require("../controllers/meetup");

// /api/meetups
const meetupRouter = express.Router();

meetupRouter.get("/", getAllMeetup);
meetupRouter.get("/:id", getAllMeetupById);
meetupRouter.post("/", CreateMeetup);
meetupRouter.put("/:id", UpdateMeetup);
meetupRouter.delete("/:id", DeleteMeetup);

module.exports = {
  meetupRouter,
};
