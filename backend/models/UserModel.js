const mongoose =  require("mongoose")

const userSchema = new mongoose.Schema({
    id : {type:Number, required : true},
    name : {type: String, required : true},
    image_url : {type: String, required : true}
   
})

const UserModel = mongoose.model("product", userSchema)

module.exports = {
    UserModel
}