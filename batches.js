const Batch=require('../models/Batch');

exports.getBatches= async(request,respone,next)=>{
    try{
         const batches= await Batch.find();

         return respone.status(200).json({
             success:true,
             count:batches.length,
             data:batches
         });
    }catch (err){
         return respone.status(500).json({
             success:false,
             error:'server error'
         });
    }
}

exports.addBatches=async(request,respone,next)=>{
    try{
        const {id,mentorname,course,student1,student2,student3,studen4,student5} =request.body;

       const batches=await Batch.create(request.body);
       
    return respone.status(201).json({
        success:true,
        data:batches
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

exports.deleteBatches=async(request,respone,next)=>{
    try{
        const batches=await Batch.findById(request.params.id);

        if(!batches){
            return respone.status(404)({
                success:false,
                error:'No batch data found'
            });
        }
        await batches.remove();
        
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