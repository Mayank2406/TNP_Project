import ReactDOM from 'react-dom';
import React, { Component,useEffect,useRef,useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Fab from '@mui/material/Fab';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';
import Card from "./components/Interview_card";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './InterviewExp.css';
import Data from "./Data.jsx";
import { useStateValue } from '../StateProvider';
import axios from 'axios';
import Interview_Data from './components/Interview_Data.jsx';
import NotLogin from './NotLogin';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

}));



function ncards(val){
  return(
    <Card
    image={"https://res.cloudinary.com/tnpmmmut/image/upload/v1630779028/tnp/ti9hemolb088ff7ksyue.jpg"}
    description={val.name}
    job_pos={val.company}
    dept={val.dept}
    />
     

  );
  }



  function InterviewExp(){
    const classes = useStyles();
    const [upload,setupload]=useState(true);
    const [image, setImage ] = useState("");
    const [tog,settog]=useState(true);
    const [alert,setalert]=useState(true);
    const [content,setcontent]=useState();
    const [company,setcompany]=useState();
    const [selectedImage, setSelectedImage] = useState();
    const fileInput = useRef(null);
    const [name,setName]=useState('');
    const [roll,setRoll]=useState('');
    const [ url, setUrl ] = useState("https://www.annauniv.edu/DIST/assests/images/upload_images/no-photo.gif");
    const [{token},dispatch]=useStateValue();
    const [data,setData]=useState('');
    const [interview,setInterview]=useState([]);
    const [experience,setexperience]=useState('');
    const [tok, setToken] = useState(false);

    const style = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    };
    function sendData()
    {
      

        axios.post("http://localhost:9000/interviews",{
          name:name,
            company:roll,
            content:experience,
            url:url, 
          
            token:token
       
        }).then((res)=>{
          console.log(res);
          //  history.push("/placements");
          console.log(token);
          setToken(false);
           })
        .catch((e)=>console.log("unsuccessfull submission"));

        // console.log(name,image,position,branch,course,placement,salary,year,interview);
    
    }
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
    const imageChange = (e) => {
      setImage(e.target.files[0])
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
        
        setupload(false);
    
      }
      console.log('atif is imagechange')
    
    };
 
    useEffect(() => {
      setalert(token);

      axios.get("http://localhost:9000/interviews")
  
  
        .then((res) => {
          console.log(res.data.data);
  
  
          console.log(res);
          console.log('arraya fdjfdkfksjfkldsjflkdsjfkdjflkdjflkdjfkldj');
          setInterview(res.data.interviews);
          // console.log("ahazam ",data)
  
          // setdata(data.data.length);
        })
        .catch(error => {
          console.log('djfjkdjflkdjfldjflkdjfdljflkjf    fjdkfjkdfjdsjf')
        });
    }
  
      , [interview])


  
  return(<>
        {tok?(
        
        <div className="INTERVIEW_MAIN">
          {alert?
        <div id="loginform">
          
          <h2 id="headerTitle">Interview Experience</h2>
          <div className="row">
         <div class="row1">

         <div className="INTERVIEWROW">
         <TextField fullWidth
           id="fullWidth"
          label='Name' 
         
          value={name} 
           InputProps={{
            readOnly: true,
          }}
          margin="normal"
          autoFocus
          
          />
           <TextField required value={roll}  
   id="fullWidth"
  margin="normal"
  autoFocus
 label='Company' onChange={(e)=>{setRoll(e.target.value)}} placeholder="Enter your company name" />
 
  </div>

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
         
         
         
  
   <div class="row">
  
  {/* <input value={roll} onChange={(e)=>{setRoll(e.target.value)}}  type='text' placeholder="Enter your companey name"/> */}
</div>  
</div>

   
      
  
      <div className="editor">
      <CKEditor
                      editor={ ClassicEditor }
                      data="Write Your Interview Experience !"
                      onReady={ editor => {
                          console.log( 'Editor is ready to use!', editor );
                      } }
                      onChange={ ( event, editor ) => {
                          const ckdata = editor.getData();
                          setexperience(ckdata);
                          console.log( { event, editor, ckdata } );
                      } }
                      onBlur={ ( event, editor ) => {
                          console.log( 'Blur.', editor );
                      } }
                      onFocus={ ( event, editor ) => {
                          console.log( 'Focus.', editor );
                      } }
                  />
       </div>
    
      <div id="button" class="row">
     <button onClick={sendData}>Submit</button>
   </div>
    </div>
    <Fab color="primary" aria-label="add" style={style}>
           <AddIcon onClick={()=>setToken(false)}  />
          </Fab>
       
          
        </div>:(<div><NotLogin/></div>)}
        
        </div>
        ):    (
          <div>
        
      
          
       {tog? <div className="main">
         <div className="head1"><div>Interview Experience</div></div>
  
    <div className="Inter">
      <header className="Inter-header">
   
        {interview.map((item)=>
        <div>
              <Card
              image={item.url}
      
              Iname={item.name}
              job_pos={item.company}
              dept={item.dept}
              company={item.company}
              content={item.content}
              tog={tog}
              comp={company}
              setcomp={setcompany}
              expData={content}
              setexpData={setcontent}
              settog={settog}
              />
              </div>
        )}

      </header>
    </div>




         <Fab color="primary" aria-label="add" style={style}>
         <AddIcon onClick={()=>{
           
           setToken(true)}}  />
        </Fab>
      
  </div>:<div><Interview_Data setshowExp={settog} company={company} content={content}/></div>}

  </div>
  )
  }
   </> 
  )
  

  // return(
  //   <div className="main">
    
  
  //     <div className="App">
  //       <header className="App-header">
        
  //         {Data.map(ncards)}
  
  //       </header>
  //     </div>
  
  

  
  //          <Fab color="primary" aria-label="add" style={style}>
  //          <AddIcon onClick={()=>setToken(true)}  />
  //         </Fab>
        
  //   </div>
  // );
  
  }
  export default InterviewExp;