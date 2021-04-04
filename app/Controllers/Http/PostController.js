"use strict";

const Post = use("App/Models/Post");

class PostController {
  async index() {
    return await Post.all();
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
