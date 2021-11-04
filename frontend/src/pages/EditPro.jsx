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
import { useRef } from 'react';
import { useStateValue } from '../StateProvider.js';

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
  
function EditPro(props) {
    const history = useHistory();
    const [loading, setloading] = useState(false);
    const [{token},dispatch]=useStateValue();
    const [completed, setcompleted] = useState(false);
    const [company,setcompany]=useState(props.company);

      const paperStyle = { padding: '30px 60px', width: "auto", margin: "20px auto" }
      const headerStyle = { margin: 0 }
      const avatarStyle = { padding:'30px',backgroundColor: '#1bbd7e' }

      const sendData=()=>{
        
        const data = new FormData();
        const upCamp=company.toUpperCase();
        
        data.append("file", image);
        console.log("atif ",data);
        
  
          axios.post(`/students/edit/${props.eId}`,{
              image:url,
              name:name,
              position:position,
              company:company,
              branch:branch,
              course:course,
              type:placement,
              salary:salary,
              year:year,
              token:token,
              instagram:instagram,
              linkedIn:linkedin,
              github:github
            
              
          }).then((res)=>{console.log("naffAt",res); history.push("/"); })
          .catch((e)=>console.log("unsuccessfull submission"));
  axios.post('./company',{
    name:upCamp
  }).then((res)=>{console.log(res)})
  .catch((e)=>console.log("company not added"));
  
          console.log(name,image,position,branch,course,placement,salary,year);
  
      }
      const [name,setname]=useState(props.name);
      const [image, setImage ] = useState("");
      const [ url, setUrl ] = useState(props.pic);
     
      const [position, setposition] = useState(props.job)
      const[branch,setbranch]=useState(props.branch);
      const[course,setcourse]=useState(props.course);
      const [placement, setplacement] = useState(props.tip)
      const[salary,setsalary]=useState(props.salary);
      const [instagram,setinstagram] = useState(props.instagram);
      const [linkedin,setlinkedin] = useState(props.linkedin);
      const[github,setgithub] = useState(props.github);
      const [year, setyear] = useState(props.batch)
      const[interview,setInterview]=useState();
  
  
      const classes = useStyles();
    
      const [open, setOpen] = React.useState(false);
    
      const [open2, setOpen2] = React.useState(false);
    
      const [open3, setOpen3] = React.useState(false);
  
  
      const [selectedImage, setSelectedImage] = useState();
  const imageChange = (e) => {
    setImage(e.target.files[0])
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      
      setupload(false);
  
    }
    console.log('atif is imagechange')
  
  };
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
    
  
      const fileInput = useRef(null);
     
      const [upload,setupload]=useState(true);
      // const fun=() => {
      //     console.log('naffo',imgData);
      //     fetch("  https://api.cloudinary.com/v1_1/breellz/image/upload",{
      //         method:"post",
      //         body: imgData
      //         })
      //         .then(resp => resp.json())
      //         .then(data => {
      //             console.log('at',data.url);
      //         if(data.url)
      //             setUrl(data.url)
      //         })
      //         .catch(err => console.log(err))
      // }
      const uploadImage =   () => {
      
      const data = new FormData()
      console.log("imag",selectedImage);
  
      data.append('file',selectedImage);
      data.append("upload_preset", "tnpImages");
      data.append("cloud_name","tnpmmmut");
  
      
        fetch("https://api.cloudinary.com/v1_1/tnpmmmut/image/upload",{
      method:"post",
      body: data     
      })
      .then(resp => resp.json())
      .then(data => {
      setUrl(data.url);
      setupload(true);
      console.log('url   ',data.url);
      })
      .catch(err => {
        setUrl('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');
        console.log("atif error  ",err)})
      }
    
  
      
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
           
  {selectedImage? (<div className="imgHead">
  <div>
  <input style={{display:'none'}} type="file" className="but" 
  ref={fileInput}onChange=  {imageChange}
  ></input>
  </div>
      <div className="upImg">
       
      <img src={URL.createObjectURL(selectedImage) || url}  alt="no image"/>
      </div>
      
      
      <div>
  {upload?<button className="bel"  onClick={()=>fileInput.current.click()}>Pick image</button>
  :<button className="bel" onClick={uploadImage}>Upload</button>}
  </div>
      </div>): (<div className="imgHead">
      <div>
  <input style={{display:'none'}} type="file" className="but" 
  ref={fileInput}onChange=  {imageChange}
  ></input>
  </div>
      <div className="upImg">
      <img src={url}  alt="no image"/>
      </div>
      
      <div>
  {upload?<button className="bel"  onClick={()=>fileInput.current.click()}>Pick image</button>
  :<button className="bel" onClick={uploadImage}>Upload</button>}
  </div>
      </div>)}
  {/* <div>
  <input style={{display:'none'}} type="file" className="but" 
  ref={fileInput}onChange=  {imageChange}
  ></input>
  </div> */}
  {/* <div>
  {upload?<button className="bel"  onClick={()=>fileInput.current.click()}>Pick image</button>
  :<button className="bel" onClick={uploadImage}>Upload</button>}
  </div> */}
  </div>
  
            
                  <TextField fullWidth label='Name' value={name}  InputProps={{
              readOnly: true,
            }}/>
                  <TextField fullWidth label='Job Position'value={position} onChange={(e)=>{setposition(e.target.value)}} placeholder="Enter your email" />
               
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
        <MenuItem value="Electronics and Communication engineering">ECE</MenuItem>
        
        <MenuItem value="Electrical engineering">EE</MenuItem>
        <MenuItem value="Civil engineering">Civil</MenuItem>
        <MenuItem value="Mechanical engineering">ME</MenuItem>
        <MenuItem value="Chemical engineering">CH.</MenuItem>
      
  
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
  <TextField fullWidth value={salary} label='Salary' onChange={(e)=>{setsalary(e.target.value)}} placeholder="Enter your Salary" />
  <TextField fullWidth value={company}label='company' onChange={(e)=>{setcompany(e.target.value)}} placeholder="Enter your company name" />

  <TextField fullWidth value={year}label='Graduation year' onChange={(e)=>{setyear(e.target.value)}} placeholder="Enter Graduation year" />
  <TextField required fullWidth label='LinkedIn' onChange={(e)=>{setlinkedin(e.target.value)}} placeholder="Enter your job position" />
<TextField required fullWidth label='Instagram' onChange={(e)=>{setinstagram(e.target.value)}} placeholder="Enter your job position" />
<TextField required fullWidth label='Github' onChange={(e)=>{setgithub(e.target.value)}} placeholder="Enter your job position" />
      
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

export default EditPro
