const express = require("express");
const projects = require("./projectModel");
const router = express.Router();

router.get("/projects", (req, res) => {
  projects
    .get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving project",
      });
    });
});
router.get("/projects/:id", (req, res) => {
  projects
    .get(req.params.id)
    .then((projects) => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({
          message: "Project not found",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the project",
      });
    });
});

router.post("/projects/", (req, res) => {
  projects
    .insert(req.body)
    .then((projects) => {
      res.status(201).json(projects);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error adding the project",
      });
    });
});
router.put("/projects/:id", (req, res) => {
  projects
    .update(req.params.id, req.body)
    .then((projects) => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({
          message: "The project could not be found",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error updating the project",
      });
    });
});

router.delete("/projects/:id", (req, res) => {
  projects
    .remove(req.params.id)
    .then((projects) => {
      if (projects > 0) {
        res.status(200).json({
          message: "The project has been removed",
        });
      } else {
        res.status(404).json({
          message: "The project could not be found",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error deleting the project",
      });
    });
});

module.exports = router;
