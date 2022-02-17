import mongoose from "mongoose";

let postSchema = mongoose.Schema({
    name  : String,
    description : String,
    createdBy : String,
    csvFile : String,
    createdAt : { type:Date , default: new Date() }
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;