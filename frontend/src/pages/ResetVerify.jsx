import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import Reset from './Reset';
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
function ResetVerify(props) {
    const [otp,setotp]=useState('');
    const [status,setStatus]=useState(false);
    const [secret,setSecret]=useState("");  
    const [userID,setuserID]=useState("");
    function callApi(){
        axios.post('http://localhost:9000/reset/verification',{
        userID:props.user,
        userOTP:otp,
        secret:"itsme"

      }).then((res)=>{
        setStatus(res.data.status);
        setSecret(res.data.secret);
       
        console.log('token reslt ',res);
      })
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
    verification
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
    value={otp}
    onChange={(e)=>{setotp(e.target.value)}}
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
    verify OTP
    </Button>
    
    </form>
    </div>
    <Box mt={8}>
    <Copyright />
    </Box>
    </Container>
    </div>:<Reset user={props.user} secret={secret}/>}
            </div>
        )
}

export default ResetVerify
