const Product = require('../model/product')

exports.getProduct = async (req,res)=>{
    try {
        const data = await Product.find()
        return res.status(400).json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postProduct = async (req,res)=>{
    try {
        const data = await Product.create(req.body)
        return res.status(400).json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}