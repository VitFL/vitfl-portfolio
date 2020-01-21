import express from 'express';
const router = express.Router();

import MainContent from '../models/MainContent';

// @route GET api/maincontent
// @desc Gets main content field value
router.get('/', (req, res) => {
  MainContent.find({}).then(fields => res.json(fields));
});

// @route GET api/maincontent/:key
// @desc Gets main content field value by its key
router.get('/:key', (req, res) => {
  MainContent.find({ key: req.params.key }).then(field => res.json(field));
});

// @route POST api/maincontent
// @desc Creates new main content field
router.post('/', (req, res) => {
  const { key, value } = req.body;
  const newField = new MainContent({
    key,
    value
  });

  newField.save().then(field => res.json(field));
});

// @route PUT api/maincontent/:id
// @desc Update an existing main content field by its id
router.put('/:id', (req, res) => {
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

// @route DELETE api/maincontent/:id
// @desc Delete a main content field
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  MainContent.findById(id)
    .then(field => field.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

export default router;
