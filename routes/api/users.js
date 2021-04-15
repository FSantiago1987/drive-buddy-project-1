const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const multer = require("multer");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

// Fetch all users
router.get("/", (req,res) => {
  User.find().then(users => {
    if (users) {
      return res.send(users);
    }
  });
});
// Fetch instructors
router.get("/instructors", (req,res) => {
  User.find({ user_type: 'instructor' }).then(users => {
    if (users) {
      return res.send(users);
    }
  });
});
router.put("/update", (req,res) => {
  let id = req.body._id;
  let payload = req.body;
  delete payload._id;
  User.findByIdAndUpdate({_id: id}, payload, function(err, result){
    if(err){
      res.send(err)
    }
    else{
      User.findOne({ _id: result._id }).then(user => {
        if (user) {
          return res.send(user);
        }
      });
        
    }
  })
});
router.post("/delete", (req,res) => {
  let id = req.body._id;
  let payload = req.body;
  delete payload._id;
  User.findByIdAndDelete({_id: id}, payload, function(err, result){
    if(err){
      res.send(err)
    }
    else{
      return res.send(result);
    }
  })
});
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
          let parameters = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
            profilePicture: "https://www.vippng.com/png/detail/363-3631798_profile-placeholder-woman-720-profile-image-placeholder-png.png",
            messages: [],
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address,
            post_code: req.body.post_code,
            city: req.body.city,
            province: req.body.province,
            user_type: req.body.user_type,
        };
        if(req.body.user_type == 'instructor'){
            parameters.feedback = [];
            parameters.languages = req.body.languages || [];
            parameters.documents = req.body.documents || [];
            parameters.gender = req.body.gender || "Rather not say";
            parameters.service_description = req.body.service_description || "I offer...";
        }
        const newUser = new User(parameters);
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });
  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            username: user.username
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
                data: user
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  // @route POST api/users/upload
  const upload = multer();
  router.post("/upload", upload.single("image"), function(req, res){
    const img = req.file;
    const _id = req.body._id;
    User.findByIdAndUpdate({_id: _id}, {profilePicture: img}, function(err, result){
      if(err){
        res.send(err)
      }
      else{
        User.findOne({ _id: result._id }).then(user => {
          if (user) {
            return res.send(user);
          }
        });
          
      }
    })
  })

  module.exports = router;