const Mentor=require('../models/Mentor');

exports.getMentors= async(request,respone,next)=>{
    try{
         const mentors= await Mentor.find();

         return respone.status(200).json({
             success:true,
             count:mentors.length,
             data:mentors
         });
    }catch (err){
         return respone.status(500).json({
             success:false,
             error:'server error'
         });
    }
}

exports.addMentors=async(request,respone,next)=>{
    try{
        const {id,mentorname,course} =request.body;

       const mentors=await Mentor.create(request.body);
       
    return respone.status(201).json({
        success:true,
        data:mentors
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

exports.deleteMentors=async(request,respone,next)=>{
    try{
        const mentors=await Mentor.findById(request.params.id);

        if(!mentors){
            return respone.status(404)({
                success:false,
                error:'No mentor data found'
            });
        }
        await mentors.remove();
        
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