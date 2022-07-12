import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import HomePage from '../pages/HomePage/HomePage'
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage"
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage"



export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='ListTripsPage' element={<ListTripsPage />} />
          <Route path='AdminHomePage' element={<AdminHomePage />} />
          <Route path='ApplicationFormPage' element={<ApplicationFormPage />} />
          <Route path='CreateTripPage' element={<CreateTripPage />} />
          <Route path='LoginPage' element={<LoginPage />} />
          <Route path='TripDetailsPage' element={<TripDetailsPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
