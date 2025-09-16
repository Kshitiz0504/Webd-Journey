const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, env.process.JWT_ADMIN_SECRET);

    if(decoded) {
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            message: "You are signed in"
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}