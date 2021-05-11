"use strict";

const Route = use("Route");

Route.on("/").render("welcome");

Route.get("posts", "PostController.index");
Route.post("posts", "PostController.store");
Route.put("posts/:id", "PostController.update");
Route.delete("posts/:id", "PostController.destroy");
