import React from 'react'
import { useHistory } from 'react-router-dom';
import './interview_Data.css'
import Accenture from "../assets/Accenture.png";
function interview_Data(props) {
    
    var pic='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg';
    var company = props.company.toLowerCase();

    company=company.replace(/\s/g, '');
    return (
        <div className="top-head" >
        
        <div className="inter-card">
        {/* <div className="inter-upper-container"> */}
        <div className="inter-image-container">
         
<h1 className="HEAD">Interview Experience of {props.company}</h1>

        </div>
       
{/* <div className="logo"><img  src={`/company_logo/${company}.jpeg`} alt=""  width="200px" height="100px"/></div> */}
        
        <div className="inter-lower-container" >
        <div dangerouslySetInnerHTML={{ __html: props.content}} />
  
      
        
        </div>
        <div className="butset">
        <button onClick={()=>props.setshowExp(true)} >back</button>
        </div>
       

        </div>
        
    </div>
    )
}

export default interview_Data
