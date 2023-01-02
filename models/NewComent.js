import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        chapter_id: {type: mongoose.Types.ObjectId, ref: 'Comments', required: true},
        user_id: {type: mongoose.Types.ObjectId, ref: 'Comments', required: true},
        text: {type: String, required: true},
        commentable_id: {type: mongoose.Types.ObjectId, ref: 'Comments'},
    },{
        timestamps: true
    }
)

export const Comments = mongoose.model('Comments',schema)