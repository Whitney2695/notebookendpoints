import express, { NextFunction, Request, Response } from 'express'
import notebook_router from './routes/notebook.router'
import  {json} from 'express';


const app = express()

app.use(json())
app.use('/notes',notebook_router)

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({
        message: err.message
    })
})

let PORT = 5050

app.listen(5050, ()=>{
    console.log(`server running at port ${PORT} ...`);
})