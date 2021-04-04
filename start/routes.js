"use strict";

const Route = use("Route");

Route.on("/").render("welcome");

Route.get("posts", "PostController.index");
Route.post("posts", "PostController.store");
