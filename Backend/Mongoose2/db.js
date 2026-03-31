const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: {type: String, unique: true},
    password: String,
    name: String
})

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})


// mongoose.model() -> Let's one insert data in  a speicific collection with this particular Schema
const UserModel = mongoose.model('users', User);
// isme mongoose.model(''users', User) mtlb hua ki inserting data in 'users' collection with 'User' schema
const TodoModel = mongoose.model('todos', Todo);


// kuki ye ek alg file h isko index.js me export krna padega

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}