const express = require("express");

const Actions = require("../data/helpers/actionModel.js");

const router = express.Router();

//GET all actions
router.get("/", (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error getting actions" });
    });
});

//GET actions by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Actions.get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log(err);
      res
        .status(404)
        .json({ error: "The action with specified id does not exist." });
    });
});

//POST new action
router.post("/", (req, res) => {
  const { project_id, description, notes } = req.body;
  Actions.insert({ project_id, description, notes })
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Project_id not found." });
    });
});

//PUT updates for specified action
router.put("/:id", (req, res) => {
  const { id } = req.params;
  //const { description, notes } = req.params.body;
  Actions.update(id, req.body)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error updating action." });
    });
});

//DELETE specified action
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Actions.remove(id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error deleting action." });
    });
});

module.exports = router;