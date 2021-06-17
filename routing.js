var express = require('express');
var router = express.Router();


router.get('/welcome', function(request, response) {
    response.send("Hello World from server..!!!!!")
})

router.get('/:id', function(request, response) {
    response.send("Hello World with id..!!!!!")
})

router.post('/welcome', function(request, response) {
    response.send("Hello World from post method..!!!!!")
})

router.all('/test', function(request, response) {
    response.send("HTTP request has not affected any route!!")
})

module.exports = router;

// localhost:8080/hello1/welcome
