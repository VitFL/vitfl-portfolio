const express = require("express");
const router = express.Router();

const MainContent = require("../models/MainContent");

// @route GET /
// @desc Gets main content field value
router.get("/", (req, res) => {
  MainContent.find({}).then(fields => res.json(fields));
});

// @route GET /
// @desc Gets main content field value by its key
router.get("/:key", (req, res) => {
  MainContent.find({ key: req.params.key }).then(field => res.json(field));
});

// @route POST /
// @desc Creates new main content field
router.post("/", (req, res) => {
  const { key, value } = req.body;
  const newField = new MainContent({
    key,
    value
  });

  newField.save().then(field => res.json(field));
});

// @route PUT /:id
// @desc Update an existing main content field by its id
router.put("/:id", (req, res) => {
  const {
    body: { key, value }
  } = req;

  MainContent.findById(req.params.id).then(field => {
    field.key = key;
    field.value = value;
    field.save();
    res.send(field);
  });
});

// @route DELETE /
// @desc Delete a main content field
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  MainContent.findById(id)
    .then(field => field.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
