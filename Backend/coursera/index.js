const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

app.post("/user/signup", async function(req, res) {

})

app.post("/user/login", async function(req, res) {

})

app.get("/user/purchases", function(req, res) {

})

app.post("/course/purchase", function(req, res) {

})

app.get("/courses", function(req, res) {

})



app.listen(3000);