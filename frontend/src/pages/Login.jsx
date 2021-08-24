import React, { useState } from 'react'

function Login() {
    const [login,setlogin]=useState(0);
    const set=()=>{
        setlogin(1)

    }
    return (
        <div>
        {!login ? <div>     <input type="text" />
            <button onClick={set}>login</button></div>
            : <div>entered</div>
            
        }

      
       
        </div>
    )
}

export default Login
