const Student=require('../models/Student');

exports.getStudents= async(request,respone,next)=>{
    try{
         const students= await Student.find();

         return respone.status(200).json({
             success:true,
             count:students.length,
             data:students
         });
    }catch (err){
         return respone.status(500).json({
             success:false,
             error:'server error'
         });
    }
}

exports.addStudents=async(request,respone,next)=>{
    try{
        const {id,name,course} =request.body;

       const students=await Student.create(request.body);
       
    return respone.status(201).json({
        success:true,
        data:students
    })
     }catch(err){
         if(err.name==='ValidationError'){
           const messages=Object.values(err.errors).map(val=>val.message);

           return respone.status(400).json({
               success:false,
               error:messages
           });
         }else{
            return respone.status(500).json({
                success:false,
                error:'server error'
            }); 
         }
    }

}

exports.deleteStudents=async(request,respone,next)=>{
    try{
        const students=await Student.findById(request.params.id);

        if(!students){
            return respone.status(404)({
                success:false,
                error:'No student data found'
            });
        }
        await students.remove();
        
        return respone.status(200).json({
            success:true,
            data:{}
        });
    }catch(err){
        return respone.status(500).json({
            success:false,
            error:'server error'
        }); 
    }
}