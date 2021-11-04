import React, { useEffect } from 'react'
import './contact.css'
import logo from  '../logo.png'
import { useStateValue } from '../StateProvider'
function Countact() {
    const [{token},dispatch]=useStateValue();
    // useEffect(()=>{
    //     axios.post()
    // },[]);
    return (
        <div className="toOfImg">
     
            <div className="contactBg">
                <img className='img2' src={logo} alt="" />

               <div><h4>Training and placement cell</h4>
               <h6 className="card-subtitle">Madan Mohan Malaviya university of technology<br/>
               Gorakhpur<br/>
            Uttar pradesh ,india</h6>
            <small>phone</small>
            <h6>+91919199191191</h6>
            <small>placement related Quaries</small>
            <h6>placement@mmmut.ac.in</h6>

            <small>plaement portal related Quaries</small>
            <h6>placementport@mmmut.ac.in</h6>
                </div>
                {/* <div className="color-overlay"></div> */}
            </div>
        </div>
    )
}

export default Countact
