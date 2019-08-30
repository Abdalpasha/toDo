"use strict";
exports.__esModule = true;
var todoRoutes_1 = require("./../routes/todoRoutes");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.status(200).json({ "Success": "server is running" });
        });
        app.use('/todo', todoRoutes_1.todoRoutes);
    };
    return Routes;
}());
exports.Routes = Routes;
