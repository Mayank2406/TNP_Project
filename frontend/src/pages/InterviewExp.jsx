import ReactDOM from 'react-dom';
import React, { Component,useEffect,useState } from 'react';
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
    const [name,setName]=useState('');
    const [roll,setRoll]=useState('');
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
    
 
    useEffect(() => {

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
        {tok?(<div id="loginform">
          
          <h2 id="headerTitle">Interview Experience</h2>
          <div>
         <div class="row">
           
  {token}
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
       
          
        </div>):    (<div className="main">
    
  
    <div className="Inter">
      <header className="Inter-header">
   
        {interview.map((item)=>
        <div>
              <Card
              image={"https://res.cloudinary.com/tnpmmmut/image/upload/v1630779028/tnp/ti9hemolb088ff7ksyue.jpg"}
              
              description={item.name}
              job_pos={item.company}
              dept={item.dept}
              />
              </div>
        )}

      </header>
    </div>




         <Fab color="primary" aria-label="add" style={style}>
         <AddIcon onClick={()=>setToken(true)}  />
        </Fab>
      
  </div>)
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