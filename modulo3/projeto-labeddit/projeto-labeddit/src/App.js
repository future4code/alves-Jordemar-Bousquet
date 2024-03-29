import React,{useState} from 'react'
import Router from "./routes/Router"
import theme from "./constants/theme"
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  const token = localStorage.getItem('token')
  const [RightButtonText, setRightButtonText] = useState(token ? 'Logout' : 'Login')


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header RightButtonText={RightButtonText} setRightButtonText={setRightButtonText} />
     <Router setRightButtonText={setRightButtonText} />
     </BrowserRouter>
    </ThemeProvider>
  )
}

export default App