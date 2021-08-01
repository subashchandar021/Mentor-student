const mongoose=require('mongoose');

const BatchSchema = new mongoose.Schema({
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
    student1:{
        type:String,
        required:true,
    },
    student2:{
        type:String,
        required:true,
    },
    student3:{
        type:String,
        required:true,
    },
    student4:{
        type:String,
        required:true,
    },
    student5:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Batch',BatchSchema);