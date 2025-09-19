const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../db");
const { z } = require("zod");
const bcrypt  = require("bcrypt");
const { userMiddleware } = require("../middleware/user")

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {

    const requiredBody = z.object({
        email: z.string().email().min(3).max(100),
        password: z.string().min(5).max(100),
        firstName: z.string().min(2).max(100),
        lastName: z.string().min(4).max(100),
    })
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect Format",
            error: parsedDataWithSuccess.error,
        })
        return;
    }

    const { email, password, firstName, lastName } = parsedDataWithSuccess.data;

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);
        await UserModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        })
        res.json({
            message: "You are signed up"
        })

    }

    catch (err) {
        console.log(err);
        res.json({
            message: "Server Error"
        })
    }
    
})

userRouter.post("/signin", async function (req, res) {
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
        }, process.env.JWT_USER_SECRET);
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

userRouter.get("/purchases", userMiddleware, async function (req, res) {

    try{
    
        const userId = req.userId;
        console.log("UserId: " , userId)

        const purchases = await PurchaseModel.find({
            userId
        })

        if(purchases.length === 0) {
            return res.json({
                message: "You have not yet purchased anything"
            })
        }

        res.status(200).json({
            message: "purchases found",
            purchases
        })
    }
    catch (err) {
        res.status(403).json({
            message: "Error loading purchases",
            details: err.message
        })
    }
})


module.exports = {
    userRouter: userRouter
}