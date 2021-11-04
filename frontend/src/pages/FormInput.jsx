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
import { Alert } from '@mui/material';

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
  
function FormInput(props) {
  const history = useHistory();
  const [loading, setloading] = useState(false);
  const [{token},dispatch]=useStateValue();
  const [completed, setcompleted] = useState(false);
  const [instagram,setinstagram] = useState('');
  const [linkedin,setlinkedin] = useState('');
  const[github,setgithub] = useState('');
  const [company,setcompany]=useState("");
  const [name,setname]=useState('');
  const [exits,setexits]=useState(true);
    const paperStyle = { padding: '30px 60px',width: "auto", margin: "40px" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { padding:'30px',backgroundColor: '#1bbd7e' }
    useEffect(() => {

      axios.get(`http://localhost:9000/students/getbyid/${props.id}`)
      
  
        .then((res) => {
        
  setname(res.data.students.userName);
  console.log(res.data.students.userName);
          console.log("single",res);
        
          
  
          // setdata(data.data.length);
        })
        .catch(error => {
          console.log('djfjkdjflkdjfldjflkdjfdljflkjf    fjdkfjkdfjdsjf')
        });
    } , [])
    const sendData=()=>{
      
      const data = new FormData();
      const upCamp=company.toUpperCase();
      data.append("file", image);
      console.log("atif ",data);
      

        axios.post('/students',{
            image:url,
            name:name,
            position:position,
            branch:branch,
            course:course,
            type:placement,
            salary:salary,
            company:company,
            token:token,
            year:year,
            instagram:instagram,
            linkedIn:linkedin,
            github:github
            
        }).then((res)=>{console.log("naffAt",res); history.push("/"); })
        .catch((e)=>{console.log("unsuccessfull submission");setexits(false)});
        axios.post('./company',{
          name:upCamp
        }).then((res)=>{console.log(res)})
        .catch((e)=>console.log("company not added"))
        console.log(name,image,position,branch,course,placement,salary,year,interview);

    }
  
   
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
    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("https://www.annauniv.edu/DIST/assests/images/upload_images/no-photo.gif");
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
                {exits?<div></div>:<div ><Alert severity="error">The user is not registered or roll number is incorrect </Alert> 

</div>}

            </Grid>
            <div style={{display:'flex',justifyContent:'center'}}>
         
{selectedImage? (<div className="imgHead">
<div>
<input style={{display:'none'}} type="file" className="but" 
ref={fileInput}onChange=  {imageChange}
></input>
</div>
    <div className="upImg">
     
    <img src={URL.createObjectURL(selectedImage)}  alt="no image"/>
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
    <img src={"https://www.annauniv.edu/DIST/assests/images/upload_images/no-photo.gif"}  alt="no image"/>
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
                <TextField required fullWidth label='Job Position' onChange={(e)=>{setposition(e.target.value)}} placeholder="Enter your job position" />
             
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
      <MenuItem value='M.tech'>M.tech</MenuItem>
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
<MenuItem value="Pre-Placement">Pre-Placement</MenuItem>
<MenuItem  value="on-Campus">On-Campus</MenuItem>

<MenuItem value="off-campus">Off-campus</MenuItem>

</Select>
</FormControl>
</div>
<TextField fullWidth label='Salary' onChange={(e)=>{setsalary(e.target.value)}} placeholder="Enter your Salary" />
<TextField fullWidth label='company' onChange={(e)=>{setcompany(e.target.value)}} placeholder="Enter your company name" />
<TextField fullWidth label='Graduation year' onChange={(e)=>{setyear(e.target.value)}} placeholder="Enter Graduation year" />
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

export default FormInput