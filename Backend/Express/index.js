// creating an http server
// express
// express is not a default node library

const express = require("express");

const app = express();

function sum(n) {
    let ans = 0;
    for(let i=1; i<=n; i++) {
        ans = ans + i;
    }
    return ans;
}

// will access using "localhost:3000/?n=3&a=4&b=7"  and so on

app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hi your ans is " + ans);
})

app.listen(3000);
