import React from 'react'
import { useNavigate } from 'react-router-dom'

const Deshborad = () => {
    const navigate = useNavigate();
    let data ={
        "name":"sonam"
    }
return (
<>
<h1> dashboard pages</h1>

<button onClick={()=>{
    navigate("/logout ",{satet:data})
}}>
    logout
</button>

</>
  )
}

export default Deshborad