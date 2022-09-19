import { app } from "./app";
import { singup } from "./endpoints/singup";

app.post('/user',singup)