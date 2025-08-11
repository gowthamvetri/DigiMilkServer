import User from "../model/User.model.js";

export const login= async (req,res)=>{
    const data = req.body;
    console.log(data)
    try {
        const user = await User.findOne({email:data.email});
        if(!user){
           return res.status(400).json({
            error:true,
            success:false,
            message:"not a vaild user"
        }) 
        }

        if(user.password != data.password){
            return res.status(400).json({
            error:true,
            success:false,
            message:"not a vaild password"
        }) 
        }

        return res.json({
            data:user,
            error:false,
            success:true,
            token:user.email
        })
        
    } catch (error) {
        return res.status(500).json({
            error:true,
            success:false,
            message:e
        })
    }
}

export const register = async(req,res)=>{
    const data = req.body;
    try{
        const chkUser = await User.find({email:data.email});

        if(chkUser.length>0){
            return res.status(400).json({
            error:true,
            success:false,
            message:"Email already exist"
        }) 
        }
        const user = new User(data)
        await user.save();
        console.log(user)
        return res.json({
            data:user,
            error:false,
            success:true
        })
    }catch(e){
        return res.status(500).json({
            error:true,
            success:false,
            message:e
        })
    }
}

export const fetchMilkInfo = async(req,res)=>{
    const {email} = req.body;
    try {
        const user =await User.findOne({email:email})
        console.log(user)
        if(!user){
            return res.status(400).json({
                message:"User not found",
                error:true,
                success:false
            })
        }
        return res.json({
          data:user.milkInfo
        })
    } catch (error) {
        return res.status(500).json({
            error:true,
            success:false,
            message:error
        })
    }
}