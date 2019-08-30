import * as express from "express"
import { todoModel } from './../model/toDoModel'

export class TodoService {
    public static async createTodo(req: express.Request, res: express.Response) {
        try {
            let newTodoItem = new todoModel(req.body);
            await newTodoItem.save()
            return newTodoItem
        }
        catch (err) {
            console.log(err)
            return err
        }
    }
    public static async GetAllTodo(req: express.Request, res: express.Response) {
        try {
            let allTodos = await todoModel.find().exec()
            return allTodos;
        }
        catch (err) {
            console.log(err)
            return err
        }
    }
    public static async GetByName(req: express.Request, res: express.Response) {
        try {
            let todoName = await todoModel.findOne({ "name": req.query.name }).exec()
            return todoName
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    public static async GetById(req: express.Request, res: express.Response) {
        try {
            let todoId = await todoModel.findById(req.params.todoId).exec();
            return todoId;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
    public static async UpdateById(req: express.Request, res: express.Response) {
        try {
            let todo: any = await todoModel.findById(req.params.todoId).exec();
            todo.name = req.body.name;
            todo.description = req.body.description;
            todo.completed = req.body.completed;
            await todo.save();
            return todo;
        }
        catch (err) {
            console.log(err)
            return err
        }
    }
}
