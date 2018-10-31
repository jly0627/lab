//express is the framework we're going to use to handle requests
const express = require('express');
//retrieve the router pobject from express
var router = express.Router();

router.get("/wait", (req, res) => {
    setTimeout(() => {
    res.send({
    message: "Thanks for waiting"
    });
    }, 1000);
   });
//add a post route to the router.
router.post("/wait", (req, res) => {
    res.send({
    message: "Hello, you sent a POST request"
    });
   });
   // "return" the router
module.exports = router;