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

const mongoURL = 'mongodb+srv://foodie:foodie@cluster1.infhfqz.mongodb.net/Foodie?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try 
  {
      await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      });
      
      console.log("connected");
      const fetchedData = await mongoose.connection.db.collection("food_item");
      const data = await fetchedData.find({}).toArray();
      const foodCategory = await mongoose.connection.db.collection("food_category");
      const data2 = await foodCategory.find({}).toArray();

              global.food_items = data;
              global.food_categories = data2;
            
    }
      

      
      // console.log(data);
      // global.food_items = data;
    
  catch (error)  
  {
    console.error("Database connection error:", error);
  }
};

module.exports = mongoDB;

