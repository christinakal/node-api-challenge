const express = require('express');

const Projects = require('../data/helpers/projectModel.js');

const router = express.Router();

// GET projects
router.get("/", (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Error getting projects." });
    });
});


//GET projects by id
router.get('/:id', (req,res) => {
    const id = req.params.id;

    Projects.get(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage: "Error getting this project."});
    })
})

//GET all action for a specific project
router.get('/:id/actions', (req,res) => {
    const id = req.params.id;
    Projects.getProjectActions(id)
    .then(action => {
        res.status(201).json(action);
    })
    .catch( error => {
        console.log(error);
        res.status(404).json({ errorMessage: 'This project doesnt exist'});
    })
})

//POST a new project
router.post('/', (req, res) => {
    const { name, description } = req.body;
    Projects.insert({ name, description })
    .then( project => {
        res.status(201).json(project);
    })
    .catch( error => {
        console.log(error);
        res.status(500).json({ errorMessage: "There was an error adding this post"});
    })
})

//PUT request for a specific project
router.put("/:id", (req, res) => {
    
    const { id } = req.params;
    const { name, description } = req.body;
    console.log(id, name, description);
    Projects.update(id, { name, description })
      .then(project => {
        res.status(200).json(project);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: "There was an error updating this project" });
      });
  });
  
  //DELETE a project
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    Projects.remove(id)
      .then(() => {
        res.status(204).end();
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: "There was an error deleting project." });
      });
  });
  
module.exports = router;