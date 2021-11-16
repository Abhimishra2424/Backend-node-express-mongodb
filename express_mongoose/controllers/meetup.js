const { Meetup } = require("../models/meetup");

// Meetup.create({
//   title: "Meetup 1",
//   description: "Meetup 1 description",
//   location: "mumbai",
//   image: "https://picsum.photos/seed/picsum/200/300?q=12",
// }).then((meetup) => {
//   console.log(meetup);
// });

// // http://localhost:3000/api/meetups
function getAllMeetup(req, res) {
  Meetup.find()
    .then((meetups) => {
      res.json({ meetups });
    })
    .catch((err) => {
      res.json(err);
    });
}

// // http://localhost:3000/api/meetups/61938713fd339a0a9df71ada
function getAllMeetupById(req, res) {
  const id = req.params.id;
  Meetup.findById(id).then((meetup) => {
    if (meetup) {
      return res.json({ meetup });
    }
    return res.status(404).json({ message: "Meetup not found" });
  });
}

// accpetd in req.body we get some data from frontend
/*
{
  "image":"image.io",
  "title":"meetup 4",
  "description":"abhi meetup",
  "location": "mumbai"
} */
function CreateMeetup(req, res) {
  const meetup = req.body;
  Meetup.create(meetup).then((meetup) => {
    res
      .status(201)
      .json({ meetup })
      .catch((err) => {
        res.status(400).json({ err: err.message });
      });
  });
}

// accpetd in req.body we get some data from frontend for update data
//what we need to do is to get the id of the meetup and then update it
function UpdateMeetup(req, res) {
  const id = req.params.id; // get the id from the url
  const meetup = req.body; // get the data from the frontend
  Meetup.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        title: meetup.title,
        description: meetup.description,
        location: meetup.location,
        image: meetup.image,
      },
    },
    { new: true }
  ).then((meetup) => res.json({ meetup }));
}

function DeleteMeetup(req, res) {
  const id = req.params.id; // get the id from the url
  Meetup.deleteOne({ _id: id }).then((meetup) => {
    res.status(204).json({ meetup });
  });
}

module.exports = {
  getAllMeetup,
  getAllMeetupById,
  CreateMeetup,
  UpdateMeetup,
  DeleteMeetup,
};
