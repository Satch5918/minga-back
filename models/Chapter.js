import mongoose from "mongoose";

/* schema del modelo de Chapter */

const chapterSchema = new mongoose.Schema({
    comic_id: {type: mongoose.Types.ObjectId, ref:"comics", required: true},
    title: {type: String, required: true},
    pages: [{type: String, required: true}],
    order: {type: Number},
}, {timestamps: true})

export const Chapter = mongoose.model('chapters', chapterSchema)