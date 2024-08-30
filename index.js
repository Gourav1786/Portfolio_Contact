// Connection Establishment Mongodb Cluster
  
const { default: mongoose } = require('mongoose');
const dotenv= require('dotenv');
  dotenv.config({path:'./.env'})
  
  mongoose.connect(process.env.MONGO_DB);
//  .then(()=>{
//      console.log("Connected");
    
//  })
//  .catch((err)=>
// console.log(err));
const express= require('express');

 const app= express();
 const bodyparser= require('body-parser');
  const cors= require('cors');
 app.use(express.json());
 app.use(cors());

 const Schema= require('./Schema');

   
 app.get('/',(req,res)=>{
      res.send('Hello Gourav Sharma')
 })
 app.post('/Message',bodyparser.json(),async(req,res)=>{
    //  console.log(req.body);
      const{Name,Email,Subject,Message}=req.body;
          const Data = await Schema.find({Email});
           console.log(Data);
            
           if(Data.length)
           {

            await Data[0].updateOne({ $push: { Message: Message }});
               res.send("Message Sent");
            }
           else
           {
             await Schema.create(req.body);
               res.send("Sucessfull Send Message")
            
           }
         
  
})
  app.listen(4000,()=>{
      console.log("Running on the port 4000")
  })

//  gOKcLzKWbyfh3y5M