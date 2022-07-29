import React from 'react'
import {Routes,Route} from "react-router-dom"
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import CommentPage from '../pages/CommentPage/CommentPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'


function Router({setRightButtonText}) {
  return (
    <div>
        <Routes>
            <Route index element ={<LoginPage setRightButtonText={setRightButtonText}/>}/>
            <Route path = "/signup" element ={<SignUpPage setRightButtonText={setRightButtonText}/>}/>
            <Route path = "/post/:id/:title/:body/:username" element ={<CommentPage/>}/>
            <Route path = "/feed" element ={<FeedPage/>}/>
            <Route path = '*' element ={<ErrorPage/>}/>
        </Routes>
    </div>
  )
}

export default Router