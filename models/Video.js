import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl:{
        type: String,
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("video", VideoSchema);
export default model;