"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var todoSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    createdDate: { type: Date, "default": Date.now },
    completed: { type: Boolean, "default": false }
});
exports.todoModel = mongoose.model('todo', todoSchema);
