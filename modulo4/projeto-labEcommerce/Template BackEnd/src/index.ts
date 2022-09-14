import app from './app'
import getAllUsers from './endpoints/getAllUsers'
import createUsers from "./endpoints/createUsers"
import createProduct from './endpoints/createProduct'
import getAllProducts from './endpoints/getAllProducts'
import createPurchase from './endpoints/createPurchases'



app.get('/user', getAllUsers)
app.post('/user',createUsers)

app.get('/products',getAllProducts)
app.post('/products',createProduct)

app.post('/purchases',createPurchase)
