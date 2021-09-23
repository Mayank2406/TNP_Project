import React, { useState } from 'react'
import FormInput from './FormInput';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PasswordSet from './PasswordSet';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Verify() {
  
  const [msg,setmsg]=useState('');
  const [win,setwin]=useState(false);
  const [sec,setsec]=useState('')
  const [userid,setuserid]=useState('');
  const classes = useStyles();
  const verify=()=>{
    console.log('atif')
    console.log('naffo');
    axios.post('http://localhost:9000/register/verification',{
      msg:msg
      
  }).then((res)=>{
    console.log(res)
    setwin(res.data.status);
    setuserid(res.data.userID);
    setsec(res.data.secret);
  })
  .catch((e)=>console.log("unsuccessfull submission"));
  console.log('veify',win);
  }
    return (
        <div>
           
         {win?<div><PasswordSet userID={userid} secret={sec} /></div>:<div>   

<Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Avatar className={classes.avatar}>
<LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
varification page
</Typography>
<div className={classes.form} noValidate>

<TextField
variant="outlined"
margin="normal"
required
value={msg}
onChange={(e)=>{setmsg(e.target.value)}}
fullWidth

label="Message"
type="text"

autoComplete="current-password"
/>

<Button

fullWidth
variant="contained"
onClick={verify}
color="primary"
className={classes.submit}
>
verify
</Button>

</div>
</div>
<Box mt={8}>
<Copyright />
</Box>
</Container>
</div>
}
        </div>
    )
}

export default Verify
