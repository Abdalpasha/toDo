import express from "express"
import {todoModel} from './../model/toDoModel'

export class TodoService{
    public static async createTodo(req:express.Request, res:express.Response){
        try{
            let newTodoItem = new todoModel(req.body);
            await newTodoItem.save()
            return newTodoItem
        }
        catch(err){
            console.log(err)
            return err
        }
    }
    public static async GetAllTodo(req:express.Request, res:express.Response){
        try{
            let allTodos = await todoModel.find().exec()
            return allTodos;
        }
        catch(err){
            console.log(err)
            return err
        }
    }
}
