import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
    const loaction = useLocation()
  return (
<>
<h1>please login</h1>
<h2>{ loaction.state.st}</h2>
</>
  )
}

export default Login