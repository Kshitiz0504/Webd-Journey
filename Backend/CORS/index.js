
// Create a Backend server in node.js that returns the sum endpoint
// Write an HTML file, that hits the backend server using the 'fetch' API


const express = require("express");
const cors = require("cors")

const app = express();


app.use(express.json());
app.use(cors());

app.post("/sum", function (req, res) {
    const a = Number(req.body.a);
    const b = Number(req.body.b);

    res.json({
        answer : a + b
    })
})

app.listen(3000);

