import mongoose from 'mongoose';

require("dotenv").config();


mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})
.then( db => console.log("Db is connected") )
.catch(error => console.log("Error DB: ", error));