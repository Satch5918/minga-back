import mongoose from 'mongoose'
const schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        lastname:{type: String, required: false},
        city:{type:String, required: true},
        country:{type:String, requires: true},
        date: {type: Date, required: false},
        photo: {type:String, required:true},
        user_id: {type: mongoose.Types.ObjectId, ref: 'users', required: true},
        useractive:{type:Boolean, required:true}
    },{
        timestamps: true
    }
)
export const Author = mongoose.model('author',schema)