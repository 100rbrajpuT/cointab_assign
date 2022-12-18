import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
const Home = () => {
    const [user, setUser] = useState([])
    

    const fetchData=()=>{
        fetch('https://randomuser.me/api/?results=50',{
            method: "GET",
            
          })
          .then((res)=>res.json())  
          .then((res)=> setUser(res.results)) 
          .catch((err)=> console.log(err))
    }
    console.log(user)

    const payload ={

    } 

  return (
    <div>
      <button onClick={fetchData}>fetch Users</button>
      <button>Delete Users</button>
      <button>
        <Link to="/detail">
           Users Detail
        </Link>
      </button>
    </div>
  )
}

export default Home
