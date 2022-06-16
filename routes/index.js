const router = require('express').Router(); //requires express's router 
const apiRoutes = require('./api'); //imports /api route

router.use('/api', apiRoutes); //connects to /api route

router.use((req, res) => { //if user enters wrong route 
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;