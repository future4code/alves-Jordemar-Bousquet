import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import Header from '../components/Header/Header'

function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element ={<LoginPage/>}/>
            <Route path = "/signup" element ={<SignUpPage/>}/>
            <Route path = "/post" element ={<PostPage/>}/>
            <Route path = "/feed" element ={<FeedPage/>}/>
            <Route path = '*' element ={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router