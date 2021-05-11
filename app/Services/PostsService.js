const Redis = use("Redis");
const Post = use("App/Models/Post");

async function getPosts() {
  const posts = await Post.query()
    .orderBy("created_at", "desc")
    .paginate(1, 10);
  const postsToJson = posts.toJSON();
  const postsToString = JSON.stringify(postsToJson.data);

  await Redis.set("posts", postsToString);
}

module.exports = { getPosts };
