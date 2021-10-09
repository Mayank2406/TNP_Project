import React from 'react'
import Popup from 'reactjs-popup';
import PopUp from './PopUp';

import './Card.css'
function Card(props) {
    var pic='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg';
    

    
    return (
        <div className="card">
        <div className="upper-container">
        <div className="image-container">
            <img class="img1" src={pic} alt=""  width="100px" height="100px"/>


        </div>
        </div>
        <div className="lower-container">
            <h3>{props.name}</h3>
            <h4>{props.job}</h4>
            <p>{props.branch}</p>
            <p>[{props.course}]</p>
            <p>Batch of {props.batch}</p>
            
           {props.userBut?<Popup trigger={  <button>
                visit profile
            </button>} modal>
               <div class="popup"><PopUp setcontent={props.setcontent} setcompany={props.setcompany} setshowExp={props.setshowExp} name={props.name} interview={props.interview}job={props.job} branch={props.branch} course={props.course} batch={props.batch} /></div> 

            </Popup>:<button>Edit profile</button>} 
          

        </div>
        
        
    </div>
    )
}

export default Card
