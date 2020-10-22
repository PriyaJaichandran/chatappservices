module.exports = app => {
  const userdetails = require("../controllers/UserdetailsController");
  var router = require("express").Router();
  
  router.post("/",userdetails.create)
  
  router.get("/user/:id", userdetails.findById);
  
  app.use('/api', router);
}