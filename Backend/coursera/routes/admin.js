const Router = require("express");
const adminRouter = Router();
const { AdminModel, CourseModel } = require("../db");
const jwt = require("jsonwebtoken");

const { adminMiddleware } = require("../middleware/admin")

const z = require("zod");
const bcrypt = require("bcrypt");

adminRouter.post("/signup", async function (req, res) {
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
        const existingUser = await AdminModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
    
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);
        await AdminModel.create({
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

adminRouter.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    
    const response = await AdminModel.findOne({
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
            }, process.env.JWT_ADMIN_SECRET);
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

adminRouter.post("/course",  adminMiddleware, async function (req, res) {

    try {
        const adminId = req.adminId;

        const title = req.body.title;
        const description = req.body.description;
        const price = req.body.price;
        const imageURL = req.body.imageURL;

        const coursesCreated = await CourseModel.create({
            title : title,
            description: description,
            price: price,
            imageURL: imageURL,
            creatorId: adminId
        })

        res.json({
            message: "Course created",
            coursesCreated
        })
    }
    catch (err) {
        res.status(500).json({ 
            message: "Failed to create course", details: err.message 
        });
    }
})

adminRouter.put("/course/:courseId", adminMiddleware, async function (req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageURL = req.body.imageURL;
    const courseId = req.params.courseId;

    try {
        const updated = await CourseModel.findByIdAndUpdate(
            courseId,
            { title: title,
            description: description,
            price: price,
            imageURL: imageURL },
            { new: true }
        )

            res.json({
                message: "Course updated",
                updated
            })
    }
    catch(err) {
        res.status(500).json({
            message: "Failed to modify course",
            details: err.message
        })
    }
    
})

module.exports = {
    adminRouter : adminRouter
}