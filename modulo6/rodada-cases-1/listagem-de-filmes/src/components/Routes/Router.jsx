import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage  from '../MainPage/MainPage'
import DetailPage from '../DetailPage/DetailPage'
import React from 'react'
import Header from '../Header.jsx/Header'


const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route index element ={<MainPage/>} />
        <Route path = "detail/:id" element ={<DetailPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router