import mongoose  from "mongoose";

const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password: {
        type: String,
        required: true,
        minlength: 6   
      }
})

const User=mongoose.model("user",userSchema)

export default User