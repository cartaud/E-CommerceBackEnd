const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {   //find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product}]   //includes its associated Product data
    });
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {   //find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]   //includes its associated Product data
    });
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {   //create a new tag
  /* req.body should look like this...
    {
      "tag_name": "sports",
    }
  */
  try {
    const tagData = await Tag.create(req.body)
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {   //updates a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {   //delete tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      },
    });
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
