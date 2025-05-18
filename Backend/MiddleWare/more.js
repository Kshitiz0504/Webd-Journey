const express = require("express");

const app = express();
// logs the method, timestamp, and the url

function loggerMiddleWare(req, res, next) {
    console.log("Method is " + req.method);
    console.log(`Host is ${req.hostname}`);
    console.log(`Route is ${req.url}`);
    console.log(new Date());
    next();
}

app.use(loggerMiddleWare);   // Using this we can let this loggerMiddleWare
// function to be accessed at all the things below it

app.get("/sum", function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        ans: a + b
    });
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b,
    });
});

app.listen(3000);