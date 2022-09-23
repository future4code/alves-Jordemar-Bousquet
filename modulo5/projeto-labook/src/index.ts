import app from './app'
import createPost from './endpoint/createPost'
import getAllPost from './endpoint/getAllPost'
import login from './endpoint/login'
import signup from './endpoint/signup'


app.post('/user/signup',signup)
app.post('/user/login',login)

app.post('/post/create',createPost)
app.get('/post', getAllPost)





