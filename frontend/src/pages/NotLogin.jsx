import { Button, Link } from '@material-ui/core'
import React from 'react'
import './NotLogin.css';
function NotLogin() {
    return (
        <div>
                 
     <div className="enable">
       <div className="box">
         <h4>Looks like you've not login in to the Account</h4>
         <p>To write interview experience <br/>You Should First Login</p>
       <Button variant="outlined" color="gray"><Link href='/login'> Go  To Login Page </Link></Button>
       </div>
       
        </div>
        </div>
    )
}

export default NotLogin
