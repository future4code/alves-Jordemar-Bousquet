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
    games.push({
        id:Date.now().toString(),
        name:name,
        price:price
    })
    res.status(400).send(games)

})
//ex4 // 
app.get('/produtos',(req:Request,res:Response) =>{
    res.send(games)
})
//ex 5 // 
app.put('/produtos/:id',(req:Request, res:Response) =>{
        const id = req.params.id
        const newPrice = req.body.price
        console.log(newPrice)
       const gamesId = games.findIndex(game => game.id === id)
       console.log(gamesId)
       if(gamesId < 0){
        res.status(404).send('Usuário não encontrado')
       } else {
        games[gamesId].price == newPrice
       }
       res.status(200).send({"Preço modificado com suceso": games})
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});