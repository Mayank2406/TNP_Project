
import './model.css'
import {Select,InputLabel, FormControl, MenuItem, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Popup from 'reactjs-popup';



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


function Model() {
    const classes = useStyles();
    const [sort,setSort]=useState('')
    const [open2, setOpen2] = useState(false)
    const handleClose2 = () => {
        setOpen2(false);
      };
    
      const handleOpen2 = () => {
        setOpen2(true);
      };
    return (
        <div>
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
      <div className='flexing'>
        <div>
     <FormControl className={classes.formControl}>
        <Select
          value={sort}
          onChange={(e)=>{setSort(e.target.value)}}

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
          onChange={(e)=>{setSort(e.target.value)}}

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
          onChange={(e)=>{setSort(e.target.value)}}

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
          onChange={(e)=>{setSort(e.target.value)}}

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
          onChange={(e)=>{setSort(e.target.value)}}

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
            
        </div>
    )
}

export default Model
