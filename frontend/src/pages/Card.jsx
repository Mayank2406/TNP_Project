import React from 'react'
import Popup from 'reactjs-popup';
import PopUp from './PopUp';

import './Card.css'
function Card(props) {
    var pic='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg';
    

    if(props.authID===props.user)
    {
    props.setreg(true);
        props.setUrl3(props.pic);
        props.setname(props.name)
    }
    return (
        <div className="card">
        <div className="upper-container">
        <div className="image-container">
            <img className="img1" src={props.pic} alt=""  width="100px" height="100px"/>


        </div>
        </div>
        <div className="lower-container">
            <h3>{props.name}</h3>
            <h4>{props.job} @ {props.company}</h4>
            <p>{props.branch}</p>
            <p>[{props.course}]</p>
            <p>{props.type} : Placement</p>
            <p>({props.salary} LPA)</p>
            <p>Batch of {props.batch}</p>
            
           {(props.authID===props.user)?<button onClick={()=>{props.sett(true);props.seteId(props.itemID);props.setEdit(true);props.setname(props.name);props.setUrl3(props.pic);props.setposition(props.job);props.setbranch(props.branch);props.setcourse(props.course);props.setplacement(props.placement);props.setsalary(props.salary);props.setyear(props.batch);props.setcompany(props.company);props.settip(props.typ)}}>Edit profile</button>:<Popup trigger={  <button>
                visit profile
            </button>} modal>
               <div class="popup"><PopUp pic={props.pic} setcontent={props.setcontent} setcompany={props.setcompany} setshowExp={props.setshowExp} name={props.name} interview={props.interview}job={props.job} branch={props.branch} course={props.course} batch={props.batch} company={props.company} /></div> 

            </Popup>} 
          

        </div>
        
        
    </div>
    )
}

export default Card
