const express = require("express");

const app = express();

app.use(express.json());   // express.json() middlewaere will help us parse any post body request that comes

const users = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // can use a simple function here
        // we just want to generate a random long string
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

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
        const token = generateToken();
        foundUser.token = token; 
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
    const token = req.headers.token
    let foundUser = null;

    for(let i=0; i<users.length; i++) {
        if(users[i].token == token) {
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

