import React, { useEffect, useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, TextareaAutosize } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Imageup from './Imageup.jsx'
import { useHistory } from "react-router-dom";

import axios from 'axios';
import './FormInput.css'
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  
function FormInput() {
  const history = useHistory();
  const [loading, setloading] = useState(false);
  const [completed, setcompleted] = useState(false);
    const paperStyle = { padding: '30px 60px', width: 600, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { padding:'30px',backgroundColor: '#1bbd7e' }
    const sendData=()=>{

        axios.post('/students',{
            imageUrl:image,
            name:name,
            position:position,
            branch:branch,
            course:course,
            type:placement,
            salary:salary,
            year:year,
            interviewExperience:interview
        }).then((res)=>{console.log(res); history.push("/placements"); })
        .catch((e)=>console.log("unsuccessfull submission"));

        console.log(name,image,position,branch,course,placement,salary,year,interview);

    }
    const [name, setname] = useState('')
    const[image,setimage]=useState('');
    const [position, setposition] = useState('')
    const[branch,setbranch]=useState('');
    const[course,setcourse]=useState('');
    const [placement, setplacement] = useState('')
    const[salary,setsalary]=useState('');
    const [year, setyear] = useState('')
    const[interview,setInterview]=useState();


    const classes = useStyles();
  
    const [open, setOpen] = React.useState(false);
  
    const [open2, setOpen2] = React.useState(false);
  
    const [open3, setOpen3] = React.useState(false);
    // (() => {
    //   setTimeout(() => {
     
    //      setloading(true);
  
    //         setTimeout(() => {
    //           setcompleted(true);
    //         }, 500);
          
    //   }, 2000);
    // }, []);
    const load=()=>{
    //   setTimeout(() => {
     
    //     setloading(true);
 
    //        setTimeout(() => {
    //          setcompleted(true);
    //        }, 500);
         
    //  }, 2000);
    history.push("/placements");  
  }
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose2 = () => {
      setOpen2(false);
    };
  
    const handleOpen2 = () => {
      setOpen2(true);
    };
    const handleClose3 = () => {
      setOpen3(false);
    };
  
    const handleOpen3 = () => {
      setOpen3(true);
    };
  
  

    
    return (
        <>
        {completed ? (
          <>
            {loading ? (
              <div className="spinner">
                <span>Loading...</span>
                <div className="half-spinner"></div>
              </div>
            ) : (
              <div className="completed">&#x2713;</div>
            )}
          </>
        ) : (<div><Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center' className='Avatar'>
                {/* <Avatar style={avatarStyle}>
                    <AddCircleOutlineOutlinedIcon />
                </Avatar> */}
                <h2 style={headerStyle}>Registration form</h2>
                <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
               
            </Grid>
            <div style={{display:'flex',justifyContent:'center'}}>
            <Imageup/>
           </div>
                <TextField fullWidth label='Name' onChange={(e)=>{setname(e.target.value)}} placeholder="Enter your name" />
                <TextField fullWidth label='Job Position' onChange={(e)=>{setposition(e.target.value)}} placeholder="Enter your email" />
             
        <FormControl className={classes.formControl}>
    <InputLabel>Course</InputLabel>
    <Select
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      value={course}
      onChange={(e)=>{setcourse(e.target.value)}}
    >
      <MenuItem value='B.tech'>B.tech</MenuItem>
      <MenuItem value='MCA'>M.tech</MenuItem>
      <MenuItem value='MCA'>MCA</MenuItem>
      
    </Select>
 
  </FormControl>
  <div>
  <FormControl className={classes.formControl}>

    <InputLabel>Branch</InputLabel>
    <Select
      open={open2}
      onClose={handleClose2}
      onOpen={handleOpen2}
      value={branch}
      onChange={(e)=>{setbranch(e.target.value)}}
    >
      <MenuItem  value="Computer Science and enginerring">CSE</MenuItem>
      <MenuItem value="EE">EE</MenuItem>
      <MenuItem value="CE">CE</MenuItem>
      <MenuItem value="ME">ME</MenuItem>
      <MenuItem value="ECE">ECE</MenuItem>
      

    </Select>
  </FormControl>
  </div>
  <div>
  <FormControl className={classes.formControl}>

  

<InputLabel>Placement type</InputLabel>
<Select
open={open3}
onClose={handleClose3}
onOpen={handleOpen3}
value={placement}
onChange={(e)=>{setplacement(e.target.value)}}
>
<MenuItem  value="on-Campus">on-Campus</MenuItem>

<MenuItem value="off-campus">off-campus</MenuItem>

</Select>
</FormControl>
</div>
<TextField fullWidth label='Salary' onChange={(e)=>{setsalary(e.target.value)}} placeholder="Enter your Salary" />
<TextField fullWidth label='Graduation year' onChange={(e)=>{setyear(e.target.value)}} placeholder="Enter Graduation year" />
<div className="interview">
  
<Button onClick={sendData} variant='contained' color='primary'>Submit</Button>

        </div>


              
          
        </Paper>
    </Grid>
    </div>)
        }
        </>
    )
}

export default FormInput