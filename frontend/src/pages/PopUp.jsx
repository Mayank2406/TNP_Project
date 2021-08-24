import React from 'react';
import './PopUp.css';

function PopUp(props) {
    var pic='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg';
    
    return (
        <div className="PopUp-card">
        <div className="PopUp-upper-container">
        <div className="PopUp-image-container">
            <img src={pic} alt=""  width="100px" height="100px"/>


        </div>
        </div>
        <div className="PopUp-lower-container">
            <h3>{props.name}</h3>
            <h4>{props.job}</h4>
            <p>{props.about}</p>
            <p>[{props.course}]</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos </p>
            
            <p>Batch of {props.batch}</p>
            <button>
                Interview experience
            </button>
          

        </div>
        
        
    </div>
    )
}

export default PopUp
