import React, { useEffect, useState } from 'react'
import FormInput from './FormInput';

import Alert from '@mui/material/Alert';
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
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

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
function Login() {
    const [login,setlogin]=useState(0);
    const [user,setuser]=useState('');
    const [pass,setpass]=useState('');
    const [exist,setexist]=useState(true);
const [{token},dispatch]=useStateValue();
useEffect(()=>{
  axios.post('http://localhost:9000/login/verify',{
    token:token
  }).then((res)=>{
    setlogin(res.data.status);
  
    console.log('token reslt ',res);
  })
},[])
    const set=()=>{
        
      axios.post('http://localhost:9000/login',{
      
        userID:user,
        userPassword:pass
        
    }).then((res)=>{
      dispatch({
        type:actionTypes.SET_TOKEN,
        token: res.data.token,
    }); 
      
      setlogin(res.data.status);
      setexist(res.data.status);
    })
    .catch((e)=>console.log("unsuccessfull submission"));
    console.log('verdict',login);
    }
    
    const classes = useStyles();
    return (
        <div>
        {!login ? <div>   
          
            <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
      Login
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            value={pass}
            onChange={(e)=>{setpass(e.target.value)}}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          {exist?<div></div>:<div ><Alert severity="error">Either your Password or Roll number is incorrect </Alert> 

  </div>}
  
          <Button
           onClick={set}
    
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forget" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
        </div>
            : <div><FormInput/></div>
            
            
        }

      
       
        </div>
    )
}

export default Login
