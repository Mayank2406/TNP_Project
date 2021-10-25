import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card'

import Popup from 'reactjs-popup';
import './Hall_of_Fame.css';
import AddIcon from '@mui/icons-material/Add';


import './model.css'
import { Select, InputLabel, FormControl, MenuItem, makeStyles, Fab } from '@material-ui/core'
import FormInput from './FormInput';
import { useStateValue } from '../StateProvider';
import NotLogin from './NotLogin';
import Interview_Data from './components/Interview_Data.jsx';

import EditPro from './EditPro.jsx';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(3),
  },
  formControl: {

    margin: theme.spacing(4),
    minWidth: 200,
  },
}));

function Hall_of_Fame(props) {
  const [act,setact]=useState(false);
  function actionToggle(){
    
   setact(!act);
   if(login){
     sett(true);
   }
  console.log(act,"atif");
  }

  const url = 'http://localhost:9000/students/';
  const classes = useStyles();
  const [filter,setfilter]=useState({});
  const [sort, setSort] = useState('');
  const [reg,setreg]=useState(false);
  const [company,setcompany]=useState("");
  const [content,setcontent]=useState("dfjdkjfkjfdkjfkdjfjfkjd")
  const [search, setSearch] = useState('');
  const [t, sett] = useState(false);
  const [showExp,setshowExp]=useState(true);
  const [eId,seteId]=useState('');
  const [userBut,setuserBut]=useState(true);
  const [open2, setOpen2] = useState(false);
  const [opt,setopt]=useState(3);
  const [login,setLogin]=useState(false);
  const [{token},dispatch]=useStateValue();
  const [user,setuser]=useState('');
  const [data, setdata] = useState([]);
  const [edit,setEdit]=useState(false);
  const [name,setname]=useState(props.name);
  const [image, setImage ] = useState("");
  const [ url3, setUrl3 ] = useState(props.url);
 const [tip,settip]=useState("");
  const [position, setposition] = useState('')
  const[branch,setbranch]=useState('');
  const[course,setcourse]=useState('');
  const [placement, setplacement] = useState('')
  const[salary,setsalary]=useState('');
const [degree,setdegree]=useState('');
  const [year, setyear] = useState('')
  const[interview,setInterview]=useState();
  const [fbatch,setfbatch]=useState('');
  const [dept,setdept]=useState('');
  const [Recuit,setRecuit]=useState('');
  const [compData,setcompData]=useState([]);
  const [fcomp,setfcomp]=useState('');
const funFilter=()=>{
axios.post('/students/filter',filter)
.then((res)=>{
  
  console.log("filterdata",res.data.student);

setdata(res.data.student);

})
.catch((err)=>{
  
  console.error("Error response:");
    // console.error(err.response.data);    // ***
    const stat=err.response.status;
    if(stat===404)
    {
      setdata([]);
    }
    console.error(stat);  // ***
    // console.error(err.response.headers); 
});
}
  useEffect(()=>{

    
    axios.post('http://localhost:9000/login/verify',{
      token:token
    }).then((res)=>{
      setLogin(res.data.status);
      setuser(res.data.userID);
      console.log('token userId ',res.data.userID);
      console.log('token satus ',res.data.status);
      console.log('token reslt ',res);
    });
  },[token]);
  const funSort = () => {
    console.log(sort);
    const url2 = `http://localhost:9000/students/${sort}`;
    axios.get(url2)
      .then((res) => {
        console.log(res.data.students);



        setdata(res.data.students);
      })
      .catch(error => console.error('error'));

  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };


useEffect(()=>{

axios.get("http://localhost:9000/company")
.then((res)=>{

  const uni=getUnique(res.data.students,'name')
  setcompData(uni);
  console.log("atif",uni);
 
})
.catch(error=>console.error('atif'));
},[compData]);
  useEffect(() => {
    // if(opt===1)
    // {
      funFilter();
    // }
    // else if(opt===2)
    // {
    //   funSort();

    // }
    // else{
    // axios.get(url)
    

    //   .then((res) => {
    //     console.log(res.data.data);


    //     console.log(res);
    //     console.log('arraya fdjfdkfksjfkldsjflkdsjfkdjflkdjflkdjfkldj');
    //     setdata(res.data.students);

    //     // setdata(data.data.length);
    //   })
    //   .catch(error => {
    //     console.log('djfjkdjflkdjfldjflkdjfdljflkjf    fjdkfjkdfjdsjf')
    //   })};
  } , [filter])

  function getUnique(arr, comp) {

    // store the comparison  values in array
const unique =  arr.map(e => e[comp])

  // store the indexes of the unique objects
  .map((e, i, final) => final.indexOf(e) === i && i)

  // eliminate the false indexes & return unique objects
 .filter((e) => arr[e]).map(e => arr[e]);

return unique;
}
  return (
    <div>
     

      {!t? (
      
      <div>
       { showExp? (<div classNmae="subHome">

        <h4 className='stats'>Placements Stats</h4>



        <div class="but1">
          <Popup
            trigger={<button className="but"> filter by </button>}
            modal
            nested


          >

            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {' '}
                  <div className='flexing'>
                    <div>
                      <FormControl className={classes.formControl}>
                        <Select
                            value={fcomp}
                            onChange={(e) => { setfcomp(e.target.value);
                              setfilter({...filter,["company"]:e.target.value});
                             }}
                          displayEmpty
                          className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            <em>--Select by company Name--</em>
                          </MenuItem>
                         {
                           compData.map((item)=>{
                             return (
                              <MenuItem value={item.name}>
                              <em>{item.name}</em>
                            </MenuItem>
                             )
                           })
                         }       

     
                        </Select>

                      </FormControl>

                      <FormControl className={classes.formControl}>
                        <Select
                      value={degree}
                      onChange={(e) => { setdegree(e.target.value);
                        setfilter({...filter,["course"]:e.target.value});
                    
                       }}
                          displayEmpty
                          className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            <em>--Select by Degree--</em>
                          </MenuItem>


                          <MenuItem value="B.tech">B.Tech</MenuItem>
                          <MenuItem value="M.tech">M.Tech</MenuItem>
                          <MenuItem value="MBA">MBA</MenuItem>
                       
                        </Select>

                      </FormControl>

                      <FormControl className={classes.formControl}>
                        <Select
                          value={fbatch}
                          onChange={(e) => { setfbatch(e.target.value);
                            setfilter({...filter,["year"]:e.target.value});
                           }}

                          displayEmpty
                          className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            <em>--Select by Batch--</em>
                          </MenuItem>


                          <MenuItem value="2020">2020</MenuItem>
                          <MenuItem value="2021">2021</MenuItem>
                          <MenuItem value="2022">2022</MenuItem>
                       
                        </Select>

                      </FormControl>
                    </div>
                    <div>


                      <FormControl className={classes.formControl}>
                        <Select
               value={dept}
               onChange={(e) => { setdept(e.target.value);
                setfilter({...filter,["branch"]:e.target.value});
              
                }}
                          displayEmpty
                          className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            <em>--Select by Department--</em>
                          </MenuItem>


                          <MenuItem  value="Computer Science and enginerring">CSE</MenuItem>
                          <MenuItem value="Electronics and Communication engineering">ECE</MenuItem>
        
                          <MenuItem value="Electrical engineering">EE</MenuItem>
                          <MenuItem value="Civil engineering">Civil</MenuItem>
                          <MenuItem value="Mechanical engineering">ME</MenuItem>
                            <MenuItem value="Chemical engineering">CH.</MenuItem>
                        </Select>

                      </FormControl>

                      <FormControl className={classes.formControl}>
                        <Select
                             value={Recuit}
                             onChange={(e) => { setRecuit(e.target.value);
                              setfilter({...filter,["type"]:e.target.value});
                             
                              }}
                          displayEmpty
           // axios.post('./company',{
  //   name:company
  // }).then((res)=>{console.log(res)})
  // .catch((e)=>console.log("company not added"));
                   className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            <em>--Select Recuitment type--</em>
                          </MenuItem>


                          <MenuItem value="Pre-Placement">Pre-Placement</MenuItem>
<MenuItem  value="on-Campus">On-Campus</MenuItem>

<MenuItem value="off-campus">Off-campus</MenuItem>
                        </Select>

                      </FormControl>
                    </div>

                  </div>
                </div>
                <div className="actions">

                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      
                   
                     
                  
                       
                      close();
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </Popup>

          <Popup
            trigger={<button className="but"> Sort by </button>}
            modal
            nested


          >

            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {' '}

                  <FormControl className={classes.formControl}>
                    <Select
                      value={sort}
                      onChange={(e) => { setSort(e.target.value) }}

                      displayEmpty
                      className={classes.selectEmpty}
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="">
                        <em>--Select--</em>
                      </MenuItem>

                      <MenuItem value="salary">Sort by package</MenuItem>
                      <MenuItem value="year">Sort by Batch</MenuItem>
                    </Select>

                  </FormControl>
                </div>
                <div className="actions">

                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      funSort();
                      close();
                      
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </Popup>

        </div>
        <div className="cardStudent">
       
          {data.map((item) => {
  
            const authID=item.author || '123';
   
          console.log("atif reayz",item);
            const itemID=item._id;
            
            return (
              <div className="student">
        
                <Card seteId={seteId} settip={settip} typ={item.type} itemID={itemID} setcontent={setcontent} setname={setname} setUrl3={setUrl3} setposition={setposition} setcourse={setcourse} setbranch={setbranch} setplacement={setplacement} setsalary={setsalary} setyear={setyear} setcompany={setcompany} setEdit={setEdit} setreg={setreg} sett={sett} authID={authID} user={user}  setshowExp={setshowExp} pic={item.image} name={item.name} interview={item.interviews} job={item.position} branch={item.branch} salary={item.salary} course={item.course} batch={item.year} company={item.company} type={item.type} placement={item.placement} />
              </div>
            )
          })

          }


        </div>
         {!reg?<div class={act?"action actionActive":"action"} onClick={actionToggle}>
        <div>+</div>
        {!login && <ul>
            
            <li>Please Login to add job profile</li>
        </ul>}
    </div>
          
          
          :<div></div>}
        </div>):(<div><Interview_Data setshowExp={setshowExp} company={company} content={content} /></div>)
        }
      </div>) : (<div>
       {login? <div>{edit?<EditPro tip={tip} eId={eId} tip={tip} pic={url3} name={name}  job={position} branch={branch} salary={salary} course={course} batch={year} company={company} placement={placement}/>:<FormInput id={user}/>}</div>:<div><NotLogin/></div>}
       <div class={act?"action actionActive":"action"} onClick={()=>{setact(!act);sett(false)}}>
        <div>+</div>
    
    </div>
      </div>)}
    </div>

  )
}

export default Hall_of_Fame