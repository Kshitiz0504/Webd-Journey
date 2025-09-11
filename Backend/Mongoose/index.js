const express = require("express");

const { UserModel, TodoModel } = require("./db");   // importing from db file

const app = express();

app.post("/signup", function(req, res) {
    UserModel.insert({    // inserting UserModel in the database
        name: "harkirat",
        password: "123",
        email: "harkirat@gmail.com"
    })
});

app.post("/signin", function(req, res) {

})

app.post("/todo", function(req, res) {

});

app.get("/todos", function(req, res) {

});

app.listen(3000);