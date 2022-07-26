import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToSignUp,goToPost } from '../../routes/coordinator'
import { Button } from "@material-ui/core"

function LoginPage() {
const navigate = useNavigate()



  return (
    <div>
    <h1>LoginPage</h1>
    <Button variant="outlined" color="primary" onClick={() => goToPost(navigate)}>Post</Button>
    </div>
  )
}

export default LoginPage