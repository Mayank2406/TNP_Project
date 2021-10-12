import React from 'react'
import "./Profile.css";
import './PopUp.css';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { Link } from '@material-ui/core';
function Profile(props) {
    var pic='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg';
    const [{token},dispatch]=useStateValue(); 
    function setLog()
    {
      dispatch({
          type:actionTypes.SET_TOKEN,
          token: null,
      }); 
    }  
    return (
        <div className="make_center">
        <div className="Profile-card">
    
        
            <h3>welcome</h3>
            <h4>you have already logged in </h4>
          
       
     
            <div className='links'> 
            
            
          <button onClick={setLog} ><Link href="/login"> Logout</Link></button>
            </div>
           
      
        
        
    </div>
    </div>
    )
}

export default Profile
