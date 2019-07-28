import {Router} from "express"
import {TodoController} from "./../controller/controller"

let todoControllerObj = new TodoController()
export const todoRoutes : Router = Router();

todoRoutes.post('/create', todoControllerObj.createTodo);
todoRoutes.get('/', todoControllerObj.GetAllTodo);