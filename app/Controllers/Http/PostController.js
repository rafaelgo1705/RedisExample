"use strict";

const Post = use("App/Models/Post");
const Redis = use("Redis");

class PostController {
  async index({ response }) {
    try {
      const postsCache = await Redis.get("posts");
      const posts = JSON.parse(postsCache);

      return posts;
    } catch (error) {
      response.status(400).send({ message: error.message });
    }
  }

  async store({ request, response }) {
    try {
      const data = request.only(["title", "description", "author"]);

      return await Post.create(data);
    } catch (error) {
      response.status(400).send({ message: error.message });
    }
  }

  async update({ params, request, response }) {
    try {
      const data = request.only(["title", "description", "author"]);

      const post = await Post.find(params.id);

      if (!post) {
        throw new Error("Este post não existe!");
      }

      post.merge(data);
      await post.save();

      return post;
    } catch (error) {
      response.status(400).send({ message: error.message });
    }
  }

  async destroy({ params, response }) {
    try {
      const post = await Post.find(params.id);

      if (!post) {
        throw new Error("Este post não existe!");
      }

      post.delete();

      response.send({ message: "Post deletado!" });
    } catch (error) {
      response.status(400).send({ message: error.message });
    }
  }
}

module.exports = PostController;
