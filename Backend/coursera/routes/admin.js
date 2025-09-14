const Router = require("express");
const adminRouter = Router();


adminRouter.post("/signup", function (req, res) {
    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.post("/signin", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/course", function (req, res) {
    res.json({
        message: "course creation endpoint"
    })
})

adminRouter.put("/course", function (req, res) {
    res.json({
        message: "course creation endpoint"
    })
})

adminRouter.get("/course/bulk", function (req, res) {
    res.json({
        message: ""
    })
})

module.exports = {
    adminRouter : adminRouter
}