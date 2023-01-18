require("dotenv").config();
const mongoose = require('mongoose')

const connectDB = () => {
mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})
}

module.exports = connectDB