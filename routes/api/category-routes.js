const router = require('express').Router(); 
const { Category, Product } = require('../../models');//connecting Category and Product db models 

// The `/api/categories` endpoint

router.get('/', async (req, res) => { //get method for /api/categories/
  try {
    const categoryData = await Category.findAll({ //retries all data associated with categories db table
      include: [{model: Product}] //connects products table to categories using the relation of categories id to products categories product_id
    });
    res.status(200).json(categoryData); //on successful request, send status of 200 and retrieved data 
  }
  catch (err) {
    res.status(400).json(err); //if error occurs, send 400 status 
  }
});

router.get('/:id', async (req, res) => { //get method for single category with specified id value /api/categories/1
  try {
    const categoryData = await Category.findByPk(req.params.id, { //looks for a primary key that matches to the requested id
      include: [{model: Product}] //connecting product data to categories table 
    });
    res.status(200).json(categoryData); //success response 
  }
  catch (err) {
    res.status(400).json(err); //error response 
  }
});

 // create a new category
router.post('/', async (req, res) => { //post method to add data to table on /api/categories/
  /* req.body should look like this...
    {
      "category_name": "sports",
    }
  */
  try {
    const categoryData = await Category.create(req.body); //adds the requested data to body if in correct format
    res.status(200).json(categoryData); //success message 
  }
  catch (err) {
    res.status(400).json(err); //error message 
  }
});

router.put('/:id', async (req, res) => {   //updates a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id //looks for matching primary key to user requested id
      },
    });
    res.status(200).json(categoryData); //success message 
  }
  catch (err) {
    res.status(400).json(err); //error message 
  }
});

router.delete('/:id', async (req, res) => { // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id //looks for matching primary key to user requested id
      },
    });
    res.status(200).json(categoryData); //success message 
  }
  catch (err) {
    res.status(400).json(err); //error message 
  }
});

module.exports = router;
