const {Router} = require("express");

const usersController =  Router();
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
const {UserModel} = require("../models/UserModel")


usersController.get("/",async (req, res)=>{
    
    const products =  await UserModel.find({})
    
    res.send(products)
})
usersController.post("/create", async(req, res)=>{
    const {id, name, image_url } = req.body;
    const bag = new UserModel({
        id, 
        name,
        image_url
       
    })
    try{
        await bag.save()
        res.send("user created")
    }
    catch(err){
        console.log(err)
        res.send("something went wrong")
    }    
})


usersController.get("/:noteId", async(req, res)=>{
    const {noteId} = req.params
   // const deletedNote = await UserModel.findOne({id: noteId},req.body)
    const product =  await UserModel.findOne({id: noteId})
    if(product){
        res.send(product)
    }
    else{
        res.send("couldn't update")
    }    
})

module.exports = {
    usersController
}