import React from "react";
import "./CardTeam.css";
import Profilephoto1 from "./assets/Profilephoto1.png"; // Tell webpack this JS file uses this image
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



export default function CardTeam(props) {

  const classes = useStyles();
console.log(props);
  return (
    <div className="cardTeam">
      <div className="card-header">
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>
      <img className="card-image" width={100} height={100} src={props.image} alt="Logo" />
      <div className="card-text1" >{props.description}</div>
      <div className="card-text2">{props.job_pos}</div>
      <div className="card-text3">{props.dept}</div>
    </div>
  );
}