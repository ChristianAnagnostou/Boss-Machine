const meetingsRouter = require("express").Router();

const {
  createMeeting,
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase,
} = require("./db");

//   - GET /api/meetings to get an array of all meetings.
meetingsRouter.get("/", (req, res, next) => {
  res.send(getAllFromDatabase("meetings"));
});
//   - POST /api/meetings to create a new meeting and save it to the database.
meetingsRouter.post("/", (req, res, next) => {
  const newMeeting = createMeeting();
  addToDatabase("meeting", newMeeting);
  res.send(newMeeting);
});
//   - DELETE /api/meetings to delete _all_ meetings from the database.
meetingsRouter.delete("/", (req, res, next) => {
  const emptyArr = deleteAllFromDatabase("meetings");
  res.send(emptyArr);
});

module.exports = meetingsRouter;
