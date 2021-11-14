const express = require("express");

function registerMiddleware(app) {
  app.use(express.json());
}

module.exports = { registerMiddleware };
