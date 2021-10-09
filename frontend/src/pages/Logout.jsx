// import React, { useEffect } from 'react';

// import { CssBaseline } from '@material-ui/core';
// import Header from './components/Header';


// import './Logout.css'
// import { useStateValue } from '../StateProvider';
// import { actionTypes } from '../reducer';
// import axios from 'axios';


// function Logout({props}) {
//   const [{token},dispatch]=useStateValue();
//   useEffect(()=>{
//     axios.post('http://localhost:9000/login/verify',{
//       token:token
//     }).then((res)=>{
//       props.setlogin(res.data.status);
    
//       console.log('token reslt ',res);
//     })
//   },[token]);
//   function setLog()
//   {
//     dispatch({
//         type:actionTypes.SET_TOKEN,
//         token: null,
//     }); 
//   }
  
//     return (
//         <div>
//         <div className="toOfImg">
    
//         <div className="logBg">
//         <CssBaseline/>
//     <Header/>
//     <button onClick={setLog} class="btn fifth">Logout</button>
//             </div>
//             {/* <div className="color-overlay"></div> */}
//         </div>
    
    
//     </div>
//     )
// }

// export default Logout
