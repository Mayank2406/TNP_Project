import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import Login from './Login';

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

function Reset(props) {
    const [pass,setpass]=useState('');
    const [status,setStatus]=useState(false);
    const [secret,setSecret]=useState("");  
    const [userID,setuserID]=useState("");
    function callApi(){
        axios.post('http://localhost:9000/reset/reset',{
        userID:props.user,
        userPassword:pass,
        secret:props.secret

      }).then((res)=>{
        setStatus(res.data.status);
 

        console.log('token reslt ',res);
      })
      }
    
    
        const classes = useStyles();
        return (
            <div>
                
               {!status? <div>   
                 {props.userID}
    
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
    <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
    Enter password
    </Typography>
    <form className={classes.form} noValidate>
    <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="roll"
    label="Password"
    name="roll"
    value={pass}
    onChange={(e)=>{setpass(e.target.value)}}
    autoComplete="number"
    autoFocus
    />
    
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
    submit
    </Button>
    
    </form>
    </div>
    <Box mt={8}>
    <Copyright />
    </Box>
    </Container>
    </div>:<Login/>}
            </div>
        )
}

export default Reset
