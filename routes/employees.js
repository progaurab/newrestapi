const express = require("express");
const router = express.Router();
const Employee = require('../models/employee');

router.get('', function(req, res){
    Employee.find({}, function( err , foundEmployees) {
        res.json(foundEmployees);
    })
});

router.get('/:id', function(req, res){
    const employeeId = req.params.id;
    Employee.findById(employeeId, function(err, foundEmployee) {
        if(err)
        {
            res.status(422).send({ errors : [{title : "Employee Error !!!" , detail: "Could not find Employee with ID"}]});
        }
        res.json(foundEmployee);
    });
})


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