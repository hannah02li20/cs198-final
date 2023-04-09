const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// Retrieve the current shopping list: GET http://localhost:4000/shop/list
// The request should come with a header of token: the_user_token_here
// the user token should be the one that you have received through the login / signup routes
// if the token is incorrect, return auth error
// the response should be a list of items or an empty list
router.get('/list', auth, async (req, res) => {
    try {
      // TODO
      // get
      // figure out how to check if the token is correct
      //res.json(req.query.id);
      const user = await User.findById(req.query.id);
      //const user = await User.findById("642cf05704904841374aa6b0");
      //res.json(user);
      res.json(user.shoppinglist);
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  });
  

// Add a new item: POST http://localhost:4000/shop/add
// The request should come with a header of token: the_user_token_here
// if the token is incorrect, return auth error
router.get('/add', auth, async (req, res) => {
  try {
    // TODO
    // add
    //const user = await User.findById(req.user.id);
    const user = await User.findById(req.query.id);
    user.shoppinglist.push(req.query.item);
    const response = await User.updateOne({ _id: req.query.id }, user);
    res.json(response.shoppinglist);
    // user.shoppinglist.push(req.query.item);
    // User.updateOne(req.query.id, user);
    // res.json(user.shoppinglist);
  } catch (e) {
    console.log(e);
    res.send({ message: 'Error in Fetching user' });
  }
});



// Delete an item: DELETE http://localhost:4000/shop/delete
// The request should come with a header of token: the_user_token_here
// if the token is incorrect, return auth error
router.get('/delete', auth, async (req, res) => {
  try {
    // TODO
    // delete
    //const user = await User.findById(req.user.id);
    const user = await User.findById(req.query.id);
    arr = user.shoppinglist
    ind = arr.findIndex(checkItem);
    function checkItem(item) {
      return item == req.query.item;
    }
    user.shoppinglist.splice(ind, 1);
    const response = await User.updateOne({ _id: req.query.id }, user);
    res.json(response.shoppinglist);
  } catch (e) {
    res.send({ message: 'Error in Fetching user' });
  }
});

module.exports = router;