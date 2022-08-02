const express = require("express");
const router = express.Router();
const Postmodel = require("../models/postmodel")


//this is a route
router.get("/", async (req, res) =>{
    try{
        const posts = await Postmodel.find();
        res.json(posts)
    }
    catch(err){
        res.json({message: err})
    }
    })

router.get("/:specificId", async (req, res)=>{
    try{
        const aPost = await Postmodel.findById(req.params.specificId)
        res.json(aPost)
    }
    catch(err){
        res.json({message: err})
    }

})
router.post("/create", async (req, res) =>{
        
        const post = new Postmodel({
            title: req.body.title,
            description: req.body.description
        })
    
        try{
        const savedPost = await post.save();
        return res.status(200).json(savedPost)        
        }
        catch(err){
            res.json({message: err})
        }
    })

router.put("/:specificId", async (req, res)=>{
    try{
        const updatedPost = await Postmodel.updateOne({_id:req.params.specificId}, {$set: {title: req.body.title}});
        res.json(updatedPost)
    }
    catch(err){
        res.json({message: err})
    }

})


router.delete("/:specificId", async (req, res)=> {
    try{
        const deletedPost = await Postmodel.remove({_id: req.params.specificId})
        res.json(deletedPost)
    }
    catch(err){
        res.json({message: err})
    }
})
module.exports = router; 