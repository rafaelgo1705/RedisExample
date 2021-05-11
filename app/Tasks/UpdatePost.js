"use strict";

const Task = use("Task");

const { getPosts } = require("../Services/PostsService");

class UpdatePost extends Task {
  static get schedule() {
    return "*/10 * * * * *";
  }

  async handle() {
    await getPosts();
  }
}

module.exports = UpdatePost;
