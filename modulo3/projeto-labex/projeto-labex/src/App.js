import React, { Component } from 'react'
import HomePage from './components/pages/HomePage/HomePage'
import ListTripsPage from './components/pages/ListTripsPage/ListTripsPage'
import ApplicationFormPage from './components/pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from './components/pages/LoginPage/LoginPage'
import AdminHomePage from './components/pages/AdminHomePage/AdminHomePage'
import TripDetailsPage from './components/pages/TripDetailsPage/TripDetailsPage'
import CreateTripPage from './components/pages/CreateTripPage/CreateTripPage'

export class App extends Component {
  render() {
    return (
      <div>
        <HomePage/>
      </div>
    )
  }
}

export default App