import {Router} from "express"
import {TodoController} from "./../controller/controller"

let todoControllerObj = new TodoController()
export const todoRoutes : Router = Router();

todoRoutes.post('/create', todoControllerObj.createTodo);
todoRoutes.get('/', todoControllerObj.GetAllTodo);
todoRoutes.get('/getByName',todoControllerObj.GetByName);
todoRoutes.get('/:todoId', todoControllerObj.GetById)
todoRoutes.put('/update/:todoId', todoControllerObj.updateByID)