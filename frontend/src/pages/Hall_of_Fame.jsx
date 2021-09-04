import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card'

import Popup from 'reactjs-popup';
import './Hall_of_Fame.css'


import './model.css'
import {Select,InputLabel, FormControl, MenuItem, makeStyles } from '@material-ui/core'




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
  const url ='http://localhost:9000/students';
    const classes = useStyles();
    const [sort,setSort]=useState('');
    const [search,setSearch]=useState('')
    const [open2, setOpen2] = useState(false)
    const funSort=()=> {
      console.log(sort);
      const url2 =`http://localhost:9000/students/${sort}`;
      axios.get(url2)
      .then((res)=>{console.log(res.data.data);
     
        setdata(res.data.data);
        console.log(data);
    
        
    // setdata(data.data.length);
    })
      .catch(error=>console.error('error'));

    };
    const handleClose2 = () => {
        setOpen2(false);
      };
    
      const handleOpen2 = () => {
        setOpen2(true);
      };
    var backendData=[];
    const [data, setdata] = useState([]);
    useEffect(() => {
  
  axios.get(url)
  
  .then((res)=>{console.log(res.data.data);
    for(var i=0;i<res.data.data.length;i++)
    {console.log(res.data[i]);
        backendData.push(res.data.data[i]);

    }
    setdata(res.data.data);
    console.log(backendData);

    
// setdata(data.data.length);
})
  .catch(error=>console.error('error'));
    }, [])
    
    return (

        <div classNmae="subHome">

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
          onChange={(e)=>{setSearch(e.target.value)}}

          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value="">
            <em>--Select by company Name--</em>
          </MenuItem>
       
       
  <MenuItem  value="Package">--Select by company Name--</MenuItem>
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
          onChange={(e)=>{setSearch(e.target.value)}}

          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value="">
            <em>--Select by Degree--</em>
          </MenuItem>
       
       
  <MenuItem  value="Package">--Select by company Name--</MenuItem>
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
          onChange={(e)=>{setSearch(e.target.value)}}

          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value="">
            <em>--Select by Batch--</em>
          </MenuItem>
       
       
  <MenuItem  value="Package">--Select by company Name--</MenuItem>
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
          onChange={(e)=>{setSearch(e.target.value)}}

          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value="">
            <em>--Select by Department--</em>
          </MenuItem>
       
       
  <MenuItem  value="Package">--Select by company Name--</MenuItem>
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
          onChange={(e)=>{setSearch(e.target.value)}}

          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value="">
            <em>--Select Recuitment type--</em>
          </MenuItem>
       
       
  <MenuItem  value="Package">--Select by company Name--</MenuItem>
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
          onChange={(e)=>{setSort(e.target.value)}}

          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>--Select--</em>
          </MenuItem>
       
  <MenuItem  value="salary">Sort by package</MenuItem>
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

            {data.map((item)=>{
                return(
                    <div className="student">
                    <Card name={item.name} job={item.position} branch={item.branch} course={item.course} batch={item.year} />
                </div>
                )
            })
                
            }

            
        </div>
        </div>
      
    )
}

export default Hall_of_Fame
