import User from "../model/User.model.js";

export const fetchUser = async(req,res)=>{
    const search = req.body;
    if(!search) search = "";
    try{
    const users = await User.find();

    if(users.length===0){
        return res.json({
            empty:true,
            message:"there is no users"
        })
    }

    return res.json({
        data:users,
        error:false,
        success:true
    })
}catch(e){
    return res.status(500).json({
        error:true,
        success:false,
        message:"Internal server error"
    })
    }
}

export const updateMilkInfo = async (req, res) => {
  const info = req.body;

  try {

    const user = await User.findOneAndUpdate(
      { email: info.email },
      {
        $push: {
          milkInfo: {
            quantity: info.quantity,
            price: info.price,
            date: new Date()
          }
        }
      },
      { new: true } // return updated document
    );

    if (!user) {
      return res.status(400).json({
        message: "User not found or error updating data",
        error: true,
        success: false
      });
    }

    return res.status(200).json({
      message: "Milk info updated successfully",
      error: false,
      success: true,
      data: user
    });

  } catch (e) {
    return res.status(500).json({
      message: "Internal server error",
      error: true,
      success: false,
      details: e.message
    });
  }
};
