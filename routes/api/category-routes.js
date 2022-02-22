const router = require('express').Router();
const {Category, Product} = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const cat = await Category.findAll({
    include: [Product],
  })
  res.status(200).json(cat);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const cat = await Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product],
  });
  res.status(200).json(cat);
});

router.post('/', async (req, res) => {
  // create a new category
  const cat = await Category.create(req.body);
    res.status(200).json(cat);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const cat = await Category.update({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json(cat);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const cat = await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json(cat);
});

module.exports = router;
