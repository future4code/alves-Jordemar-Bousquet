import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage  from '../MainPage/MainPage'
import DetailPage from '../DetailPage/DetailPage'
import React from 'react'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element ={<MainPage/>} />
        <Route path = "detail" element ={<DetailPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router