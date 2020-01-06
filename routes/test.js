const express = require("express");
const router = express.Router();

// @route GET /
// @desc test
router.get("/", (req, res) => {
  const response = { test: "test" };

  res.json(response);
});

module.exports = router;
