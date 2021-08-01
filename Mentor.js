const mongoose=require('mongoose');

const MentorSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    mentorname:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Mentor',MentorSchema);