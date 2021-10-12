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

function Hall_of_Fame() {
  const url = 'http://localhost:9000/students/';
  const classes = useStyles();
  const [sort, setSort] = useState('');
  const [company,setcompany]=useState("atifjkfjkfdf");
  const [content,setcontent]=useState("dfjdkjfkjfdkjfkdjfjfkjd")
  const [search, setSearch] = useState('');
  const [t, sett] = useState(false);
  const [showExp,setshowExp]=useState(true);
  const [userBut,setuserBut]=useState(true);
  const [open2, setOpen2] = useState(false);
  
  const [login,setLogin]=useState(false);
  const [{token},dispatch]=useStateValue();
  const [user,setuser]=useState('');
  const [data, setdata] = useState([]);
  useEffect(()=>{
    axios.post('http://localhost:9000/login/verify',{
      token:token
    }).then((res)=>{
      setLogin(res.data.status);
      setuser(res.data.userID);
      console.log('token userId ',res.data.userID);
      console.log('token satus ',res.data.status);
      console.log('token reslt ',res);
    })
  },[token]);
  const funSort = () => {
    console.log(sort);
    const url2 = `http://localhost:9000/students/${sort}`;
    axios.get(url2)
      .then((res) => {
        console.log(res.data.data);

        setdata(res.data.data);
        console.log(data);


        // setdata(data.data.length);
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



  useEffect(() => {

    axios.get(url)
    

      .then((res) => {
        console.log(res.data.data);


        console.log(res);
        console.log('arraya fdjfdkfksjfkldsjflkdsjfkdjflkdjflkdjfkldj');
        setdata(res.data.students);

        // setdata(data.data.length);
      })
      .catch(error => {
        console.log('djfjkdjflkdjfldjflkdjfdljflkjf    fjdkfjkdfjdsjf')
      });
  } , [data])

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
                          value={sort}
                          onChange={(e) => { setSearch(e.target.value) }}

                          displayEmpty
                          className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            <em>--Select by company Name--</em>
                          </MenuItem>


                          <MenuItem value="Package">--Select by company Name--</MenuItem>
                          <MenuItem value="branch">--Select by Degree--</MenuItem>
                          <MenuItem value="branch">--Select by Batch--</MenuItem>
                          <MenuItem value="branch">--Select by Recruitment--</MenuItem>
                          <MenuItem value="branch">--Select by Department--</MenuItem>
                          <MenuItem value="branch">--Select by Recruitment Type--</MenuItem>

                        </Select>

                      </FormControl>

                      <FormControl className={classes.formControl}>
                        <Select
                          value={sort}
                          onChange={(e) => { setSearch(e.target.value) }}

                          displayEmpty
                          className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            <em>--Select by Degree--</em>
                          </MenuItem>


                          <MenuItem value="Package">--Select by company Name--</MenuItem>
                          <MenuItem value="branch">--Select by Degree--</MenuItem>
                          <MenuItem value="branch">--Select by Batch--</MenuItem>
                          <MenuItem value="branch">--Select by Recruitment--</MenuItem>
                          <MenuItem value="branch">--Select by Department--</MenuItem>
                          <MenuItem value="branch">--Select by Recruitment Type--</MenuItem>

                        </Select>

                      </FormControl>

                      <FormControl className={classes.formControl}>
                        <Select
                          value={sort}
                          onChange={(e) => { setSearch(e.target.value) }}

                          displayEmpty
                          className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            <em>--Select by Batch--</em>
                          </MenuItem>


                          <MenuItem value="Package">--Select by company Name--</MenuItem>
                          <MenuItem value="branch">--Select by Degree--</MenuItem>
                          <MenuItem value="branch">--Select by Batch--</MenuItem>
                          <MenuItem value="branch">--Select by Recruitment--</MenuItem>
                          <MenuItem value="branch">--Select by Department--</MenuItem>
                          <MenuItem value="branch">--Select by Recruitment Type--</MenuItem>

                        </Select>

                      </FormControl>
                    </div>
                    <div>


                      <FormControl className={classes.formControl}>
                        <Select
                          value={sort}
                          onChange={(e) => { setSearch(e.target.value) }}

                          displayEmpty
                          className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            <em>--Select by Department--</em>
                          </MenuItem>


                          <MenuItem value="Package">--Select by company Name--</MenuItem>
                          <MenuItem value="branch">--Select by Degree--</MenuItem>
                          <MenuItem value="branch">--Select by Batch--</MenuItem>
                          <MenuItem value="branch">--Select by Recruitment--</MenuItem>
                          <MenuItem value="branch">--Select by Department--</MenuItem>
                          <MenuItem value="branch">--Select by Recruitment Type--</MenuItem>

                        </Select>

                      </FormControl>

                      <FormControl className={classes.formControl}>
                        <Select
                          value={sort}
                          onChange={(e) => { setSearch(e.target.value) }}

                          displayEmpty
                          className={classes.selectEmpty}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem value="">
                            <em>--Select Recuitment type--</em>
                          </MenuItem>


                          <MenuItem value="Package">--Select by company Name--</MenuItem>
                          <MenuItem value="branch">--Select by Degree--</MenuItem>
                          <MenuItem value="branch">--Select by Batch--</MenuItem>
                          <MenuItem value="branch">--Select by Recruitment--</MenuItem>
                          <MenuItem value="branch">--Select by Department--</MenuItem>
                          <MenuItem value="branch">--Select by Recruitment Type--</MenuItem>

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
                      close();
                      funSort();
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
  
            const authID=item.author._id || '123';
   
            console.log("auther",authID,user);

            
            return (
              <div className="student">
        
                <Card authID={authID} user={user} setcontent={setcontent} setcompany={setcompany} setshowExp={setshowExp} pic={item.image} name={item.name} interview={item.interviews} job={item.position} branch={item.branch} course={item.course} batch={item.year} company={item.company} />
              </div>
            )
          })

          }


        </div>
         <Fab color="primary" aria-label="add" style={style}>
         <AddIcon onClick={()=>sett(true)}  />
          </Fab>
        </div>):(<div><Interview_Data setshowExp={setshowExp} company={company} content={content} /></div>)}
      </div>) : (<div>
       {login? <FormInput/>:<div><NotLogin/></div>}
<Fab color="primary" aria-label="add" style={style}>
           <AddIcon onClick={()=>sett(false)}  />
           

          </Fab>
      </div>)}
    </div>

  )
}

export default Hall_of_Fame