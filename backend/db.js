// const mongoose = require('mongoose');

// const mongoURL ='mongodb+srv://foodie:foodie@cluster0.infhfqz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


// const mongoDB = ()=>{
    
// mongoose.connect(mongoURL, ()=>{
//     console.log("connected");}
// )
// }



// module.exports=mongoDB;


// db.js
const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://foodie:foodie@cluster0.infhfqz.mongodb.net/Foodie?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try 
  {
      await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      });
      
      console.log("connected");

  } 
  catch (error) 
  {
    console.error("Database connection error:", error);
  }
};

module.exports = mongoDB;


