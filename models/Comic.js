import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        author_id: {type: mongoose.Types.ObjectId, ref:'author', required: true},
        company_id: {type: mongoose.Types.ObjectId, ref:'companies'},
        title: {type: String, required: true},
        photo: {type: String, required: true},
        description: {type: String, required: true},
        category_id: {type: mongoose.Types.ObjectId, required: true},

    },{
        timestamps: true
    }
)

export const Comic = mongoose.model('comics', schema)