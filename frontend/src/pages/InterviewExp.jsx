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


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
        
        <div>
          {alert?
        <div id="loginform">
          
          <h2 id="headerTitle">Interview Experience</h2>
          <div>
         <div class="row">
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
        
     <input value={name} onChange={(e)=>{setName(e.target.value)}}  type='text' placeholder="Enter your name"/>
   </div>  
   <div class="row">
  
  <input value={roll} onChange={(e)=>{setRoll(e.target.value)}}  type='text' placeholder="Enter your companey name"/>
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
              image={"data:image/jpeg;base64,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"}
      
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