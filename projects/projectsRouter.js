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
module.exports = router;