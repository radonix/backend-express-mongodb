import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    }
});

const User = mongoose.model("User",UserSchema);

export default User;