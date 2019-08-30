import * as express from "express"
import {todoRoutes} from "./../routes/todoRoutes"
export class Routes {
    constructor() {

    }
    public static configRoutes(app:express.Application): void {

        app.get('/', (req: express.Request, res: express.Response)=>{
            res.status(200).json({ "Success": "server is running" })
        });
        app.use('/todo', todoRoutes)


    }
}
