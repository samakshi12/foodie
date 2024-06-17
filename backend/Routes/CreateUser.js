const express = require('express');
const router = express.Router();

const User = require('../model/User');
const {body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "mynameissamakshisrivastava1234$#"

router.post("/createuser", [
body('email','Enter a valid email').isEmail(),
body('password','Enter atleast 6 characters').isLength({ min:6})],
 async (req, res)=>{

       const result = validationResult(req);

       if (!result.isEmpty()) 
       {
       return res.status(400).json({ result: result.array() });
       }

       const salt = await bcrypt.genSalt(10);
       let secPassword = await bcrypt.hash(req.body.password,salt);
        
       try
        {
          await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            address: req.body.address
          }).then(res.json({success:true}));

        }
        catch(err)
        {
           console.log(err);
           res.json({success:false});
        }
})



router.post("/loginuser", 
[
body('email','Enter a valid email').isEmail(),
body('password','Enter atleast 6 characters').isLength({ min:6})],
   async (req, res)=>{
         
      const result = validationResult(req);

       if (!result.isEmpty()) 
       {
       return res.status(400).json({ result: result.array() });
       }
          let email = req.body.email;

          try
          {

           let userData = await User.findOne({email});


           if(!userData)
           {
               return res.status(400).json({errors: "Enter valid credentials"})
           }
           
           const pwdCompare = await bcrypt.compare(req.body.password, userData.password);

            if(!pwdCompare)
            {
                return res.status(400).json({errors: "try valid credentials"})
            }

            const data = {
              user:{
                 id: userData.id
              }
            }
            
            const authToken = jwt.sign(data,jwtSecret)
            return res.json({success:true, authToken:authToken});

          }
          catch(err)  
          {
             console.log(err);
             res.json({success:false});
          }
  })
module.exports = router;