const express = require("express");
const project = require("./projectModel");
const router = express.Router();

router.get("/project", (req, res) => {
  project
    .get()
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving project",
      });
    });
});

module.exports = router;
