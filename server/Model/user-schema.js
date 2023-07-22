import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    password:{
        type: String,
        required: true,
        min: 8,
        max : 30
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    number: {
        type: Number,
        required: true
        
    }

})

const user = mongoose.model('user', userSchema)

export default user;