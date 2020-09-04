const express = require("express");
const actions = require("./actionModel");
const router = express.Router();

router.get("/actions", (req, res) => {
  actions
    .get()
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the actions",
      });
    });
});

router.get("/actions/:id", (req, res) => {
  actions
    .get(req.params.id)
    .then((action) => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({
          message: "Action not found",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the actions",
      });
    });
});

router.post("/actions/", (req, res) => {
  actions
    .insert(req.body)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error adding the action",
      });
    });
});
router.put("/actions/:id", (req, res) => {
  actions
    .update(req.params.id, req.body)
    .then((action) => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({
          message: "The user could not be found",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error updating the action",
      });
    });
});

module.exports = router;
