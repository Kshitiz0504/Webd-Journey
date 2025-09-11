const express = require("express");

const { UserModel, TodoModel } = require("./db");   // importing from db file

const jwt = require("jsonwebtoken");
const JWT_SECRET = "asdasd123@123";

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://KshitizShukla:kshitiz%4005@cluster0.veazpi0.mongodb.net/todo-harkirat-2222")     // password me @ -> %40

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // UserModel.create({}) -> Asycnhronous function calll -> will return a promise
    await UserModel.create({    // inserting UserModel in the database
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are signed up"
    })
});

app.post("/signin", async function(req, res) {

    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if(user) {
        const token = jwt.sign({
            id: user._id.toString()         // DB me _id hai to usse credentials lenge -> ObjectId type ka h to convert into string
        }, JWT_SECRET);
        res.json({
            token: token
        });
    } 
    else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }


})

app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo Created"
    })
});

app.get("/todos", auth, async function(req, res) {
    // req.userId
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })

});

function auth(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData) {
        req.userId = decodedData.id;
        next();
    }
    else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

app.listen(3000);