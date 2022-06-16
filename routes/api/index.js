const router = require('express').Router();
const categoryRoutes = require('./category-routes'); //importing the various routes
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes); //connects to categories route on /api/categories
router.use('/products', productRoutes); //connects to products route on /api/products
router.use('/tags', tagRoutes); //connects to tags route on /api/

module.exports = router;