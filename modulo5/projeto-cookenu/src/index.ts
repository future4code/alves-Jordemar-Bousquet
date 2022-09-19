import app from './app'
import createRecipes from './endpoints/recipes/createRecipes'
import getRecipesById from './endpoints/recipes/getRecipesById'
import getProfile from './endpoints/users/getProfile'
import getUserById from './endpoints/users/getUserById'
import login from './endpoints/users/login'
import signup from './endpoints/users/signup'


app.post('/users/signup', signup)
app.post('/users/login', login)
app.get('/users/profile',getProfile)
app.get('/users/:id/profile',getUserById)

app.post('/recipe', createRecipes)
app.get('/recipe/:id', getRecipesById)






