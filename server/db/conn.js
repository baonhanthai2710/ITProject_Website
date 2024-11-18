import mongoose from "mongoose";

const DB = "mongodb+srv://user123:userpass@cluster0.0t0kb.mongodb.net/EcomerceWeb?retryWrites=true&w=majority";

mongoose.connect(DB).then(()=>console.log("database connected")).catch((error)=>console.log("error" + error.message));