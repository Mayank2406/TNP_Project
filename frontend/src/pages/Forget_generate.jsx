import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import ResetVerify from './ResetVerify';
import { Alert } from '@mui/material';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          techTheka
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

function Forget_generate() {
  const [user,setuser]=useState('');
const [status,setStatus]=useState(false);
const [exits,setexits]=useState(true);
  function callApi(){
    console.log("atif reyaz khan")
    axios.post('http://localhost:9000/reset/generate',{
    userID:user
  }).then((res)=>{
    setStatus(res.data.status);
 setexits(res.data.status);
    console.log('token reslt ',res);
  })
  .catch((err)=>{ console.error(err); setexits(false);});
  }


    const classes = useStyles();
    return (
        <div>
            
           {!status? <div>   

<Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Avatar className={classes.avatar}>
<LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
Forget Password
</Typography>
<form className={classes.form} noValidate>
<TextField
variant="outlined"
margin="normal"
required
fullWidth
id="roll"
label="Roll Number"
name="roll"
value={user}
onChange={(e)=>{setuser(e.target.value)}}
autoComplete="number"
autoFocus
/>
{exits?<div></div>:<div ><Alert severity="error">The user is not registered or roll number is incorrect </Alert> 

</div>}

{/* <FormControlLabel
control={<Checkbox value="remember" color="primary" />}
label="Remember me"
/> */}
<Button
onClick={callApi}

fullWidth
variant="contained"
color="primary"
className={classes.submit}
>
send OTP
</Button>

</form>
</div>
<Box mt={8}>
<Copyright />
</Box>
</Container>
</div>:<ResetVerify user={user}/>}
        </div>
    )
}

export default Forget_generate;
