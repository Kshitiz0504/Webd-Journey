const express = require('express');

const app = express();

// function that returns a boolean if the age of the person is more than 14
function isOldEnough(age){
    if (age >= 14) {
        return true;
    }
    else{
        return false;
    }
}

// will do same thing using MiddleWare
function isOldEnoughMiddleWare(req, res, next) {
    const age = req.query.age;
    if (age>=14) {
        next();
    }
    else{
        res.json({
            msg: "Sorry you are not of required age"
        })
    }
}

// If using MiddleWare, do this ->

// app.use(isOldEnoughMiddleWare);    -> Can do this also if a whole APP requires only one MiddleWare
// Order matters while using app.use -> Things written above it cannot have its access


app.get("/ride2", isOldEnoughMiddleWare, function (req, res) {
    res.json({
        msg: "You have successfully riden the ride 2",
    });
});

app.get("/ride1", isOldEnoughMiddleWare, function (req, res) {
    res.json({
        msg: "You have successfully riden the ride 1",
    });
});

app.listen(3000);

// Using this way, we can do the job if we are not using MiddleWare

// app.get("/ride1", function(req, res) {
//     if (isOldEnough(req.query.age)) {
//         res.json({
//            msg: "You have successfully riden the ride 1"
//         })
//     } else{
//         res.status(411).json({
//             msg: "Sorry you are not of required age"
//         })
//     }
// })
    
// app.get("/ride2", function(req, res) {
//     if (isOldEnough(req.query.age)) {
//         res.json({
//            msg: "You have successfully riden the ride 2"
//         })
//     } else{
//         res.status(411).json({
//             msg: "Sorry you are not of required age"
//         })
//     }
// })
    
   

// app.listen(3000);