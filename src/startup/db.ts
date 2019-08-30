import * as mongoose from "mongoose"
export class DB{
    private static connectionString : string = "mongodb://localhost:27017/TodoDb";
    public static connectMongoDb(){
        mongoose.connect(this.connectionString,{useNewUrlParser : true})
        .then(() => {console.log("Db Connection Successfull")})
        .catch(err => {console.log("Db connection failed"); console.log(err);})
    }
}

