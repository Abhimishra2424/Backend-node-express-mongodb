function getAllMeetup(req, res) {
  res.json([1, 3, 45]);
}

function getAllMeetupById(req, res) {
  res.json(1);
}

function CreateMeetup(req, res) {
  res.json([1, 3, 45]);
}

function UpdateMeetup(req, res) {
  res.json([1, 3, 45]);
}

function DeleteMeetup(req, res) {
  res.json([1, 3, 45]);
}

module.exports = {
  getAllMeetup,
  getAllMeetupById,
  CreateMeetup,
  UpdateMeetup,
  DeleteMeetup,
};
