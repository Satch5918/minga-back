import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        chapter_id: {type: mongoose.Types.ObjectId, ref: 'chapter', required: true},
        user_id: {type: mongoose.Types.ObjectId, ref: 'user', required: true},
        text: {type: String, required: true},
        commentable_id: {type: mongoose.Types.ObjectId, ref: 'comments'},
    },{
        timestamps: true
    }
)

export const Comments = mongoose.model('coments',schema)