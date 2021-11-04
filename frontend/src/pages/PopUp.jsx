import React from 'react';
import './PopUp.css';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import {SocialMediaIconsReact} from 'social-media-icons-react';

function PopUp(props) {
    var pic='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg';
    
    return (
        <div className="PopUp-card">
        <div className="PopUp-upper-container">
        <div className="PopUp-image-container">
            <img src={props.pic} alt=""  width="100px" height="100px"/>


        </div>
        </div>
        <div className="PopUp-lower-container">
            <h3>{props.name}</h3>
            <h4>{props.job} @ {props.company}</h4>
            <p>{props.about}</p>
            <p>[{props.course}]</p>
            <p>Batch of {props.batch}</p>
            {
                props.interview.map((item)=>{
                    return(
                        <button onClick={()=>{props.setcontent(item.content);props.setcompany(item.company);props.setshowExp(false);}}>Interview of {item.company}</button> 
                    )
                })
            }
  
            <div className='links'> 
            
            
            {props.linkedin &&  <div className="linkedin"> <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url={props.linkedin} size="24" /></div>}
           { props.github &&<div className='linkedin'>            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="github" iconColor="rgba(255,255,255,1)"  url={props.github} size="24" /></div>}
            {props.instagram && <div className='linkedin'>            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="instagram" iconColor="rgba(255,255,255,1)" url={props.instagram} size="24" /></div>}

            </div>
           
        </div>
        
        
    </div>
    )
}

export default PopUp
