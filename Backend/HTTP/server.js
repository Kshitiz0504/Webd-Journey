// Creating own HTTP server

// const express = require("express")

// const app = express();

// function multiply(a, b) {
//     return a*b;
// }

// function add(a, b) {
//     return a + b;
// }

// function divide(a,b) {
//     return a/b;
// }

// function subtract(a, b) { 
//     return a - b;
// }

// function requestIncreaser(req, res) {
//     requestCount = requestCount + 1;
//     console.log("Total number of requests = " + requestCount);
//     req.requestCount = requestCount;
// }

// // There are 2 ways to use the inputs in localhost
// // We can either use params like this or query parameters like the other one
// // Body is not there in get method so these are the ways to give inputs
// // Sometimes these are present automatically as headers also 
// // Like in google's site

// app.get("/multiply/:a/:b", function (req, res) {
//     requestIncreaser(req, res);
//     // Main Logic

//     const a = Number(req.params.a);
//     const b = Number(req.params.b);
//     const ans = multiply(a, b);
//     res.send("Multiplication of a and b gives:" + ans);
// })

// // app.get("/multiply", function(req, res) {
//     // requestIncreaser(req, res);
//     //      Main Logic
    
// //     const a = req.query.a;
// //     const b = req.query.b;
// //     const ans = multiply(a, b);
// //     res.send("Multiplication of a and b gives:" + ans);
// // })

// app.get("/add", function(req, res) {
//     requestIncreaser(req, res);
//     // Main Logic
    
//     const a = Number(req.query.a);
//     const b = Number(req.query.b);
//     const ans = add(a, b);
//     res.send("Addition of a and b gives:" + ans);
// })

// app.get("/divide", function(req, res) {
//     requestIncreaser(req, res);
//     // Main Logic
    
//     const a = req.query.a;
//     const b = req.query.b;
//     const ans = divide(a, b);
//     res.send("Division of a by b gives:" + ans);
// })

// app.get("/subtract", function(req,res) {
//     requestIncreaser(req, res);
//     // Main Logic
    
//     const a = req.query.a;
//     const b = req.query.b;
//     const ans = subtract(a, b);
//     res.send("The subtraction of a and b gives" + ans);

// })

// app.listen(3000); 


// MiddleWares ->
// -> It can modify the request
// -> It can cancel the request
// -> It calls the next function

const express = require("express")

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) {
    requestCount = requestCount + 1;
    console.log("Total number of requests = " + requestCount);
    if(true) {   // any required condition
        res.json({
            message: "I ended the request early"
        });
    } else{
         next();   // It calls the next function
    }
    
   
}

function realSumHandler(req, res) {
    console.log("Control reached the real handler")
    // main logic
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        ans: a + b
    });
}

// better routing, add database, middleWare
app.get("/sum", requestIncreaser, realSumHandler);

app.get("/admin", function() {
    res.json({
        message: "Total number of requests on the server is " + requestCount
    })
});

app.listen(3000);