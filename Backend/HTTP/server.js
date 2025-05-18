const express = require("express")

const app = express();

function multiply(a, b) {
    return a*b;
}

function add(a, b) {
    return a + b;
}

function divide(a,b) {
    return a/b;
}

function subtract(a, b) { 
    return a - b;
}

// There are 2 ways to use the inputs in localhost
// We can either use params like this or query parameters like the other one
// Body is not there in get method so these are the ways to give inputs
// Sometimes these are present automatically as headers also 
// Like in google's site

app.get("/multiply/:a/:b", function (req, res) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const ans = multiply(a, b);
    res.send("Multiplication of a and b gives:" + ans);
})

// app.get("/multiply", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     const ans = multiply(a, b);
//     res.send("Multiplication of a and b gives:" + ans);
// })

app.get("/add", function(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const ans = add(a, b);
    res.send("Addition of a and b gives:" + ans);
})

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const ans = divide(a, b);
    res.send("Division of a by b gives:" + ans);
})

app.get("/subtract", function(req,res) {
    const a = req.query.a;
    const b = req.query.b;
    const ans = subtract(a, b);
    res.send("The subtraction of a and b gives" + ans);

})

app.listen(3000);