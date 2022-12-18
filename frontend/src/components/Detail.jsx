import React, { useEffect, useState } from 'react'

const Detail = () => {
    const [id, setId] = useState()
    const [bag, setBags]= useState([])
   
  
    const getData = ()=>{
       fetch("https://cointab-assign-k0bragc5k-100rbrajput.vercel.app/users",{
        method: "GET"
      })
      .then((res)=>res.json())  
      .then((res)=> setBags(res)) 
      .catch((err)=> console.log(err))
    }
  
    useEffect(()=>{
      getData()
    },[]) 
    console.log("bg", bag)
  return (
    <div>
      <h3>Users</h3>
      {bag.length>0 &&
          bag.map((e)=>{
            return (
                <div key={e.id}  style={{display:"flex", fontFamily:"sans-serif", fontSize:"10px", border:"1px solid grey",margin:"2px", padding:"5px"}}>
                    <img width="50px" src={e.image_url}/>
                    <p style={{padding:"7px"}}>{e.name}</p>
                  
                    <p style={{padding:"5px" , border:"3px solid black", height:"50%", borderRadius:"10px"}}>
                      <button onClick={()=> setId(`${e.id}`)}>Delete</button>
                    </p>
                </div>   
            )
          })
      }
    </div>
  )
}

export default Detail
