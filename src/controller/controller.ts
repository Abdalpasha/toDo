import express from "express"
import {TodoService} from "./../services/todoService"
export class TodoController{
    public async createTodo(req:express.Request, res:express.Response){
        let result = await TodoService.createTodo(req,res)
        res.json(result)
    }
    public async GetAllTodo(req:express.Request, res:express.Response){
        let result = await TodoService.GetAllTodo(req,res)
        res.json(result)
    }
    public async GetByName(req:express.Request, res:express.Response){
        let result = await TodoService.GetByName(req,res)
        res.json(result)
    }
    public async GetById(req:express.Request, res:express.Response){
        let result = await TodoService.GetById(req,res)
        res.json(result)
    }
    public async updateByID(req:express.Request, res:express.Response){
        let result = await TodoService.UpdateById(req,res)
        res.json(result)
    }
}