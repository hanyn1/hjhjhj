import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Mehdi() {
    const [newdata,setnewdata ]=useState([]) 
    const getname=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log(response.data);
        setnewdata(response.data);
        
        }
        )
        .catch((error)=>{
            console.log(error)
        })
}

    

  return (
    <div>
        <button onClick={getname}>fetch</button>
       {
        newdata.map((ele)=>(

            <div class="card" style={{width:"18rem"}}>
  <div class="card-body" key={ele.id}>
    <h5 class="card-title">{ele.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{ele.email}</h6>
    
  </div>
</div>
        ))
       }
        
      
    </div>
  )
}




