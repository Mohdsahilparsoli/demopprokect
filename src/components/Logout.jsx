import React from 'react'
import { useLocation } from 'react-router-dom'

const Logout = () => {
let loaction = useLocation()
    return (
   <>
    <div>logout</div>
    {/* <h2>{loaction.state.name}</h2> */}
   </>
   
    )
}

export default Logout