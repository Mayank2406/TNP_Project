import ReactDOM from 'react-dom';
import React, { Component,useState } from 'react';
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
    image={val.image}
    description={val.description}
    job_pos={val.job_pos}
    dept={val.dept}
    />
     

  );
  }

  function InterviewExp(){
    const classes = useStyles();
    const [name,setName]=useState('');
    const [roll,setRoll]=useState('');
    const [data,setData]=useState('');


    const style = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    };
  

  const [token, setToken] = useState(false);
  
  return(<>
        {token?(<div id="loginform">
          {name}
          {roll}
          {data}
      
          <h2 id="headerTitle">Interview Experience</h2>
          <div>
         <div class="row">
  
     <input value={name} onChange={(e)=>{setName(e.target.value)}}  type='text' placeholder="Enter your name"/>
   </div>  
   <div class="row">
  
  <input value={roll} onChange={(e)=>{setRoll(e.target.value)}}  type='text' placeholder="Enter your roll number"/>
</div>  

   
      
  
      <div className="editor">
      <CKEditor
                      editor={ ClassicEditor }
                      data="Write Your Interview Experience !"
                      onReady={ editor => {
                          console.log( 'Editor is ready to use!', editor );
                      } }
                      onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          setData(data);
                          console.log( { event, editor, data } );
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
     <button>Submit</button>
   </div>
    </div>
    <Fab color="primary" aria-label="add" style={style}>
           <AddIcon onClick={()=>setToken(false)}  />
          </Fab>
       
          
        </div>):    (<div className="main">
    
  
    <div className="Inter">
      <header className="Inter-header">
      
        {Data.map(ncards)}

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