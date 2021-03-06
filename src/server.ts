import express from "express"
import * as bodyParser from "body-parser";
import {DB} from "./startup/db";
import {Routes} from "./startup/route"

class TodoApp{
    app : express.Application
    constructor(){
        this.app = express();
        this.app.listen(3000, 'localhost', () => 
        {console.log("Server is running on port 3000")})
        this.configBodyParser();
        Routes.configRoutes(this.app);
        DB.connectMongoDb();
        
    }
    private configBodyParser(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
    }
    
}

let myTodoApp = new TodoApp();

