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
import axios from 'axios';
import { useHistory } from 'react-router';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      techTheak
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

function PasswordSet(props) {
  const [stat,setstat]=useState(false)
  const [password,setpassword]=useState('');
  const history=useHistory();
  console.log(props);
  const setpass=()=>{
    console.log(password);
    axios.post('http://localhost:9000/register/reset',{
      userID:props.userID,
      userPassword:password,
      secret:props.secret
      
  }).then((res)=>{
    console.log("passw",res)
    console.log('usernaem',props.userID)
    console.log('secret',props.secret)
    console.log('password',password)
    history.push('/login');
    setstat(res.data.status);
    // history.push('/login')

  })
  .catch((e)=>console.log("unsuccessfull submission"));
    
  }
    const classes = useStyles();
    return (
        <div>
            <div>   

<Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Avatar className={classes.avatar}>
<LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
Set password
</Typography>
<div className={classes.form} noValidate>

<TextField
variant="outlined"
margin="normal"
required
value={password}
onChange={(e)=>{setpassword(e.target.value)}}
fullWidth

label="Password"
type="password"

autoComplete="current-password"
/>

<Button

type="submit"
fullWidth
variant="contained"
onClick={setpass}
color="primary"
className={classes.submit}
>
set
</Button>

</div>
</div>
<Box mt={8}>
<Copyright />
</Box>
</Container>
</div>
        </div>
    )
}

export default PasswordSet
