import mongoose from 'mongoose';


mongoose.connect("mongodb://localhost/operacionmlbd" , {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})
.then( db => console.log("Db is connected") )
.catch(error => console.log("Error DB: ", error));