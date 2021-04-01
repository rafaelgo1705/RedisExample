"use strict";

const Route = use("Route");

Route.on("/").render("welcome");

Route.get("vehicles", "PreviewController.index");
