const express = require('express');
const router = express.Router();

router.post('/foodData', (req,res)=>{
    try{
       res.status(200).send({food_items: global.food_items, food_categories: global.food_categories});
     }catch(error){
         console.error(error.message);
         res.send("server error");
     }

})

module.exports = router;