"use strict";

const Post = use("App/Models/Post");
const Redis = use("Redis");

class PostController {
  async index() {
    const postsCache = await Redis.get("posts");
    const posts = JSON.parse(postsCache);

    return posts;
  }

  async store({ request }) {
    const data = request.only(["title", "description", "author"]);

    return await Post.create(data);
  }

  async show({ params, request, response }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = PostController;
