const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const fetchuser = require("../middleware/fetchuser");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
var jwt = require("jsonwebtoken");

// ROUTE 1: Create a User using:POST "/api/auth/createuser". Doesn't require Auth
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
    // The above array will set the restrictions rules and the following code will give error if those rules are broken.
    const errors = validationResult(req);
    // If error is empty is false then there is error so the if statement cathes the error.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      let secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      // The following code generates an authentication token which is provided to the user
      const data = {
        user: {
          id: user.id,
        },
      };
      // This gives the user the authtoken using which the token can be transformed back into the user.id .And because of the secret helps to detect if the token has been Tampered(changed)
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({ authtoken: authtoken });
    } catch (error) {
      console.error(error);
      res.status(500).send("Some error occured");
    }
  }
);

// ROUTE 2:Authenticate a User using:POST "/api/auth/login", No login required
router.post(
  "/login",
  [
    body("password", "Passwoed cannot be black").exists(),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // If error is empty is false then there is error so the if statement cathes the error.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({
          error: "Please try to login with correct credentials",
        });
        var Success=false;
      }

      // The following code generates an authentication token which is provided to the user
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      Success = true;
      res.json({Success, authtoken: authtoken });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
);

// ROUTE 3:Get loged in user details using:POST "/api/auth/getuser",  login required.

// The fetchuser is an middleware that is used to fetch user data using authentication data.
router.post("/getuser",fetchuser, async (req, res) => {
 
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
