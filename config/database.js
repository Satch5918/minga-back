import mongoose from "mongoose";

const options = {
    useUnifiedTopology : true,

    useNewUrlParser: true
}

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('database connected'))
    .catch(err => console.log(err))