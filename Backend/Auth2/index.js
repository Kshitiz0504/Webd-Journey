// JWT can be decoded by anyone 
// But it can only be verified by me using the JWT_SECRET
// The token we are getting from here is put in jwt.io and can be decrypted 
// The thing that can be decrypted is that which is passed along with JWT
// But any other thing such as password cant be decrypted without the JWT_SECRET
// isilye password ni pass krte mainly username krte h kuki vo decode ho bhi gya to koi dikat ni hogi 

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors")

const JWT_SECRET = "harkirat123";

const app = express();
app.use(express.json());
app.use(cors());
const users = [];

app.get('/check', (req, res)=>{
    res.send("The server is running")
})

// localhost: 3000
// here we are trying to access the frontend file by sending the folder name to the backend server
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    })

    // we should check if a user with this username already exists

    res.json({
        message: "You are signed up"
    })
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // To check if given username and password are there or not

    let foundUser = null;

    for(let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i]
        }
    }

    // No user with these details found -> Wrong credentials
    if (!foundUser) {
        res.json({
            message: "Credentials incorrect"
        })
        return 
    } else{
        const token = jwt.sign({
            username : foundUser.username        // what data we need to send, username krskte h dont put password
        }, JWT_SECRET);

        res.json({
            token: token
        })
    }
})


// In our websites we may have multiple routes which we need to access after we are logged in
// So instead of writing the same repetitive logic in all the routes
// We should create a middleWare and pass it in all the routes making the task easier

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData.username) {
        req.username = decodedData.username;   // We need to pass the decodedData.username to other routes
        next()
    } else{
        res.json({
            message: "You are not logged in"
        })
    }
}


app.get("/me", auth, function (req, res) {

        let foundUser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === req.username) {
                foundUser = users[i]
            }
        }

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    })

app.listen(3000, ()=>{
    console.log("The server is running on port 3000")
})

