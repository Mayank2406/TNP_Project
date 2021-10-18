import React, { useState,useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import imgAdd from '../logo.png';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import axios from 'axios';
import { actionTypes } from '../reducer';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
const [{token},dispatch]=useStateValue();
const [login,setlogin]=useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  useEffect(()=>{

    
    axios.post('http://localhost:9000/login/verify',{
      token:token
    }).then((res)=>{
  
     setlogin(res.data.status);
     
    });
  },[token]);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="logo"><img height="50px" src={imgAdd} alt="ald" /></div>
          <div className="Logname">{login?<Button      variant="contained"
             onClick={()=>{
                    dispatch({
                      type:actionTypes.SET_TOKEN,
                      token: null,
                  }); 
                  setlogin(false);


          }}><Link to="/login" style={{textDecoration:"none"}}> Logout</Link><LogoutIcon/></Button>:<div><Button     style={{ color: 'white'}}  variant="contained"><Link to="/login" style={{textDecoration:"none",color:"black",'&:hover':{color:"black"}}}> Login</Link><LoginIcon/></Button></div>}</div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
