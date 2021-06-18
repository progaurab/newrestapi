var express = require('express');
var app = express();
const mongoose = require('mongoose');
const config = require('./config/dev');
const Employee = require('./models/employee');
const FakeDb = require('./fake-db');
const employeeRoutes = require('./routes/employees');

mongoose.connect(config.DB_URI , { useNewUrlParser : true, useUnifiedTopology: true } ).then(() => {

    const fakeDb = new FakeDb();
    fakeDb.seedDb();

});
;

app.use("/api/v1/employees", employeeRoutes);

app.listen(9090);


