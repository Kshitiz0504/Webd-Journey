const mongoose = require("mongoose");
require ("dotenv").config();
console.log("connected to");
mongoose.connect(process.env.MONGO_URI);

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const User = new Schema ({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})

const Course = new Schema ({
    title: String,
    description: String,
    price: Number,
    imageURL : String,
    creatorId: ObjectId
})

const Admin = new Schema ({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})

const Purchase = new Schema ({
    courseId: ObjectId,
    userId: ObjectId
})

const UserModel = mongoose.model('User', User);
const CourseModel = mongoose.model('Course', Course);
const AdminModel = mongoose.model('Admin', Admin);
const PurchaseModel = mongoose.model('Purchase', Purchase)

module.exports = {
    UserModel: UserModel,
    CourseModel: CourseModel,
    AdminModel: AdminModel,
    PurchaseModel: PurchaseModel 
}