const StudentRepo = require('../repositories/StudentRepo')

module.exports.getStudents= async(req)=>{
    try{
        const data=await StudentRepo.getStudents(req)
        return {
            code: 200,
            message:"Success",
            data: data,
            error: ''
        }
    }catch(err){
        throw(err)
    }
}

module.exports.getStudentsSpecs= async(req)=>{
    try{
        const data=await StudentRepo.getStudentsSpecs(req)
        return {
            code: 200,
            message:"Success",
            data: data[0],
            error: ''
        }
    }catch(err){
        throw(err)
    }
}