// We have learnt databases we know that our details are stored in the databases.
// But it is unsafe as if the database of any app/website gets leaked all our datas can be extracted from it
// For eq. if we logged in to facebook and by any reason the database of facebook is leaked, all our data such as id, apsswords are also leaked
// To correct this, we hash our passwords which is called hashing
// Hashing -> Suppose we signed up to a website with password iamKshitiz, ther backend hashes the password in some string
// such as maybe asasdhuddjshjfsh and this password is stored in the database
// So if in case database gets leaked one cant predict my password from the hashed version
// Hashing is deterministic -> basically it means that the hashed password will always point to the same password
// Mtlb 123123 will always point to dasasd(example)
// Here comes its drawback -> If the hashes of two people are same, this means that both of them have the same passowrd
// One can create a rainbow table, where popular passwords with hashes are saved
// So one can access others password in such case
// Hence we need to ensure that even the passwords are same, two people should have different hashes
// This is called Salting 
// Salting -> We signed up with password 123123, some salt(a random string) is added to my password and it is added to my password and after, all this is hashed in the backend
// And the whole salted + hashed password is stored in the database 

const bcrypt = require("bcrypt");

const express = require("express");

const { UserModel, TodoModel } = require("./db");   // importing from db file

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const { z } = require("zod");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI)     // password me @ -> %40

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {

    // Input Validation -> if email or others are not of desired type(such as string), checking is input validation
    // done using zod

    // req.body{
    // email: string,
    // password: string,
    // name: string
    // }

    const requiredBody = z.object({
        email: z.string().min(3).max(100),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })

    // const parsedData = requiredBody.parse(req.body);
    // parse without safe returns data if everything is correct or throws an error
    // whereas safeParse safely parses it, doesnot throws an error, gives us a success field in the object
    // that we can check upon, and if is not true we can send error msgs
    // Better to use safeParse
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error    // tells what exactly is the error such as password must contain special character etc.
        })
        return ;
    }

    const email = req.body.email;     // string
    const password = req.body.password;    // string
    const name = req.body.name;          // string

    const hashedPassword = await bcrypt.hash(password, 5);    // 5 points to 5 rounds of hashing-> more the value here more complexed hashing is done
        console.log(hashedPassword);

        // UserModel.create({}) -> Asycnhronous function calll -> will return a promise
        await UserModel.create({    // inserting UserModel in the database
            email: email,
            password: hashedPassword,
            name: name 
        });

        res.json({
            message: "You are signed up"
        })

    // Used try catch

    // const email = req.body.email;
    // const password = req.body.password;
    // const name = req.body.name;


    // // Agr same email vla user login krnen aaya to whole server will crash
    // // We need to wrap that part which may cause prblms, in try catch

//     let errorThrown = false;
//     try {
//         const hashedPassword = await bcrypt.hash(password, 5);    // 5 points to 5 rounds of hashing-> more the value here more complexed hashing is done
//         console.log(hashedPassword);

//         // UserModel.create({}) -> Asycnhronous function calll -> will return a promise
//         await UserModel.create({    // inserting UserModel in the database
//             email: email,
//             password: hashedPassword,
//             name: name 
//         });
//     }
//     catch(e) {
//         res.json({
//             message: "User already exists"
//         })
//         errorThrown = true;
//     }

//     if(!errorThrown) {
//         res.json({
//             message: "You are signed up"
//         })
//     }

});

app.post("/signin", async function(req, res) {

    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    });

    if(!response) {
        res.status(403).json({
            message: "User doesnot exist in our Db"
        })
        return ;
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    console.log(response);

    if(passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()         // DB me _id hai to usse credentials lenge -> ObjectId type ka h to convert into string
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