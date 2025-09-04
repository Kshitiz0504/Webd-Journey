
// The problem with token is that we have to hit the database at each time
// mtlb hm jitne baar authenticated endpoint ko hit krenge har baar database ko request send krenge
// or we can say that we need to store these tokens in a variable rigth now and eventually in database
// isse better h to use JWTs -> JSON Web Tokens
// npm install jsonwebtoken -> require it
// This is the way to use jsonwebtoken
// In this when we hit the sign in endpoint we ge a very long JWT,
// and when we hit the /me endpoint we send the JWT along with it
// that JWT gets decoded and we still have to hit the database to get the other infos like password or anything
// but we dont have to hit the database where JWT decoding happens
// so we use JWTS oftenly due to these reasons


const express = require("express");
const jwt = require('jsonwebtoken');

const JWT_SECRET = "randomharkiratloveskiara"
const app = express();

app.use(express.json());

const users = [];


app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up"
    })

    console.log(users)
})

app.post("/signin", function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i = 0; i<users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i];
        }
    }

    if(foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);    // convert their username over to a JWT
        
        res.json({
            token: token
        }) 
        } else {
            res.status(403).send({
                message: "Invalid username or password"
            })
        }

        console.log(users)
    

    // either this or above one
    // const user = users.find(function(u) {
    //     if(u.username == username && u.password == password) {
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // })



})

// If we want to get our data after we signed in
// We need to send the token generated after signing in, in the headers

app.get("/me", function (req, res) {
    const token = req.headers.token    // jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET);   // {username: "harkirat@gmail.com"}
    const username = decodedInformation.username

    let foundUser = null;

    for(let i=0; i<users.length; i++) {
        if(users[i].username == username) {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else{
        res.json({
            message: "Token invalid"
        })
    }


})



app.listen(3000);

