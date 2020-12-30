const ideasRouter = require("express").Router();

const checkMillionDollarIdea = require("./checkMillionDollarIdea");

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("./db");

ideasRouter.param("ideaId", (req, res, next, id) => {
  const idea = getFromDatabaseById("ideas", id);
  if (idea) {
    req.idea = idea;
    next();
  } else {
    res.status(404).send();
  }
});
// - GET /api/ideas to get an array of all ideas.
ideasRouter.get("/", (req, res, next) => {
  res.send(getAllFromDatabase("ideas"));
});
// - POST /api/ideas to create a new idea and save it to the database.
ideasRouter.post("/", (req, res, next) => {
  const newIdea = addToDatabase("ideas", req.body);
  res.status(201).send(newIdea);
});
// - GET /api/ideas/:ideaId to get a single idea by id.
ideasRouter.get("/:ideaId", (req, res, next) => {
  res.send(req.idea);
});
// - PUT /api/ideas/:ideaId to update a single idea by id.
ideasRouter.put("/:ideaId", (req, res, next) => {
  let updatedIdea = updateInstanceInDatabase("ideas", req.body);
  res.send(updatedIdea);
});
// - DELETE /api/ideas/:ideaId to delete a single idea by id.
ideasRouter.delete("/:ideaId", (req, res, next) => {
  const deleted = deleteFromDatabasebyId("ideas", req.idea);
  deleted ? res.status(204).send() : res.status(500).send();
});

module.exports = ideasRouter;
