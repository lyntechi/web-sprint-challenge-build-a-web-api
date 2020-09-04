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

module.exports = router;
