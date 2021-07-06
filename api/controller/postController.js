const mongoose = require("mongoose");

const Post = require("../models/post");

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

exports.post_getAll = (req, res, next) => {
  postId = req.query.postId;

  if (postId) {
    queryFilter = { _id: postId };
  } else queryFilter = {};

  Post.find({ queryFilter })
    .exec()
    .then((docs) => {
      res.render("home.ejs", {
        StartingContent: homeStartingContent,
        posts: docs,
      });
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
};

// exports.post_createPost = (req, res, next) => {
//   const post = new Post({
//     _id: new mongoose.Types.ObjectId(),
//     by: req.body.by,
//     message: req.body.message,
//   });
//   post
//     .save()
//     .then((docs) => {
//       res.status(201).json({
//         message: docs,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: err.message,
//       });
//     });
// };

// exports.post_addComment = (req, res, next) => {
//   const data = req.body;
//   var query = {
//     _id: req.query.postId,
//   };

//   var update = { $push: { comments: data } };

//   Post.updateOne(query, update, { new: true })
//     .then((docs) => {
//       res.status(201).json({
//         message: "comment added to post",
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: err.message,
//       });
//     });
// };

// exports.post_deletePost = (req, res, next) => {
//   Post.deleteOne({ _id: req.query.postId })
//     .then((docs) => {
//       res.status(201).json({
//         message: "Post removed from Database",
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         message: err.message,
//       });
//     });
// };