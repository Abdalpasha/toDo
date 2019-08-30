"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var db_1 = require("./startup/db");
var route_1 = require("./startup/route");
var TodoApp = /** @class */ (function () {
    function TodoApp() {
        this.app = express();
        this.app.listen(3000, 'localhost', function () { console.log("Server is running on port 3000"); });
        this.configBodyParser();
        route_1.Routes.configRoutes(this.app);
        db_1.DB.connectMongoDb();
    }
    TodoApp.prototype.configBodyParser = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return TodoApp;
}());
var myTodoApp = new TodoApp();
