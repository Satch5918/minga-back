import mongoose from 'mongoose'
const schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        last_name:{type: String},
        city:{type:String, required: true},
        country:{type:String, requires: true},
        date: {type: Date},
        photo: {type:String, required:true},
        user_id: {type: mongoose.Types.ObjectId, ref: 'users', required: true},
        active:{type:Boolean, required:true}
    },{
        timestamps: true
    }
)
export const Author = mongoose.model('author',schema)