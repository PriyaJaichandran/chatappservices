module.exports = app => {
  const userdetails = require("../controllers/UserdetailsController");
  var router = require("express").Router();
  
  router.post("/signupuser",userdetails.create);
  
  router.get("/user/:id", userdetails.findByEmail);
  
  router.post("/signinuser", userdetails.signinUser);

  router.get("/users/:email", userdetails.findAll);
  
  app.use('/api', router);
}