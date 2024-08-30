const mongoose= require('mongoose');
 const validator= require('validator');
 const Schema= new mongoose.Schema({
      Name:{
         type:String,
         require:true
     },
     Email:{
          type:String,
          required:true,
          validate: {
            validator: validator.isEmail,  // Use validator.isEmail directly
            message: props => `${props.value} is not a valid email!`
        }

     },
     Subject:{
        type:String,
        required:true
     },
     Message:[{
          type:String,
          required:true
     }]
 })
  const user= mongoose.model('user',Schema);
 module.exports= user;