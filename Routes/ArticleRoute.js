const express = require("express");
const router = express.Router();
const ArticleController = require("../Controller/ArticleContoller");

router
  .route("/")
  .get(ArticleController.GetPosts)
  .post(ArticleController.CreatePost);

router
  .route("/:id")
  .get(ArticleController.GetPost)
  .patch(ArticleController.UpdatePost)
  .delete(ArticleController.DeletePost);

module.exports = router;
