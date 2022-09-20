const express = require("express");
const { getViews, addView } = require("../controllers/views");

const routes = express.Router();

routes.route("/:postId").get(getViews).post(addView);

module.exports = routes;
