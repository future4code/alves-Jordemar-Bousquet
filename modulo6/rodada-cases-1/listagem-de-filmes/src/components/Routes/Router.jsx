import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage  from '../MainPage/MainPage'
import DetailPage from '../DetailPage/DetailPage'
import React from 'react'
import Header from '../Header.jsx/Header'
import Footer from '../Footer/Footer'


const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route index element ={<MainPage/>} />
        <Route path = "detail/:id" element ={<DetailPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router