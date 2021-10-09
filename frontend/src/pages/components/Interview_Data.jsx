import React from 'react'
import { useHistory } from 'react-router-dom';
import './interview_Data.css'

function interview_Data(props) {
    
    var pic='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg';
 
    return (
        <div className="top-head">
        
        <div className="inter-card">
        <div className="inter-upper-container">
        <div className="inter-image-container">
         
<h1>Interview Experience of {props.company}</h1>

        </div>
        </div>
        <div className="inter-lower-container">
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
