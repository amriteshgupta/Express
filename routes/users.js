const express = require("express");
const router = express.Router();


router.use(logger);



router.get("/", (req, res) => {
    console.log(req.query.name)
  res.send("Users page");
});
router.get("/new", (req, res) => {
  res.render("users/new")
});

router.post("/", (req, res) => {
  console.log(req.body.name);
  res.send("User created");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get USer with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });

  const user=[{name:"Anshul"},{name:"Amritesh"}]
router.param("id", (req, res, next, id) => {
  req.user=user[id];
  next();
});

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}

module.exports = router;
