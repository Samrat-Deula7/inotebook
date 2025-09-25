const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Create a User using:POST "/api/auth/createuser". Doesn't require Auth
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("email", "Enter a valid email").isEmail(),
  ],
   async (req, res) => {
    const errors = validationResult(req);
    // If error is empty is false then there is error so the if statement cathes the error.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
     // Check whether the user with this email exists already
    
        
     
     let user=await User.findOne({email:req.body.email});
     if(user){
        return res.status(400).json({error:"Sorry this email already exists"})
     }
     user= await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })

    //   .then((user) => res.json(user))
    //   .catch((err) => {
    //     console.log(err), res.json({ error: "Please enter an unique value" });
    //   });
    res.json({"great":"Data saved succesfully"})
}
  
);

module.exports = router;
