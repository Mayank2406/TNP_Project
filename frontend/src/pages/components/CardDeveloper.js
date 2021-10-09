import React from "react";
import "./CardDeveloper.css";
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



export default function CardDeveloper(props) {

  const classes = useStyles();

  return (
    <div className="cardDeveloper">
      <div className="card-header-Developer">
        <div className="card-title-group-Developer">
          <h5 className="card-title-Developer">{props.title}</h5>
        </div>
      </div>
      <img className="card-image-Developer" width={100} height={100} src={props.image} alt="Logo" />
      <div className="card-text1-Developer" >{props.description}</div>
      <div className="card-text2-Developer">{props.job_pos}</div>
      <div className="card-text3-Developer">{props.dept}</div>
      <div className="card-text3-Developer">{props.email}</div>
      
      <div className="social">
      <SocialIcon url={props.linkdin} bgColor="white" fgColor="black"/>
      <SocialIcon url={props.instagram} bgColor="white" fgColor="black"/>
      </div>
    </div>
  );
}