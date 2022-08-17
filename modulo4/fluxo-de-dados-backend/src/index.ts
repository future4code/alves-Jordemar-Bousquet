import express, { Request, Response} from "express";
import cors from 'cors'
import { games } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

//ex1//
app.get('/test',(req:Request, res:Response) =>{
    res.send('Api está funcional')
})
//ex3 //
app.post('/AddGame',(req:Request,res:Response) =>{
    const {name,price} = req.body
    console.log(name,price)
    games.push({
        id:Date.now(),
        name:name,
        price:price
    })
    console.log(games)

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});