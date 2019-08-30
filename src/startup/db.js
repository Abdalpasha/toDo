"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.connectMongoDb = function () {
        mongoose_1["default"].connect(this.connectionString, { useNewUrlParser: true })
            .then(function () { console.log("Db Connection Successfull"); })["catch"](function (err) { console.log("Db connection failed"); console.log(err); });
    };
    DB.connectionString = "mongodb://localhost:27017/TodoDb";
    return DB;
}());
exports.DB = DB;
