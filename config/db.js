import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gowthamvetriii:gowtham77@cluster0.8iqj7nk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").
then(()=>console.log("DB connected Successfully")).catch((e)=>console.log(e))