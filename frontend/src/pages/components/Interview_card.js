import React, { useState } from "react";
import "./Interview_card.css";
import Profilephoto1 from "../assets/Profilephoto1.png"; // Tell webpack this JS file uses this image
import { makeStyles } from '@material-ui/core/styles';
import Modal from "./Modal";
import useModal from './useModal';
import interview_Data from "./Interview_Data";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



export default function Card(props) {
  function toggle(){
  props.settog(false);
  props.setcomp(props.company);
  props.setexpData(props.content)
  }
    const [exp,setexp]=useState(false);
  const classes = useStyles();

  return (
    <div>
      
    <div className="Icard">
      <div className="Icard-header">
        <div className="Icard-title-group">
          <h5 className="Icard-title">{props.title}</h5>
        </div>
      </div>
      <img className="Icard-image" width={100} height={100} src={props.image} alt="Logo" />
      <div className="Icard-text1" >{props.description}</div>
      <div className="Icard-text2">{props.job_pos}</div>
      <div className="Icard-text2">{props.j}</div>
      <div className="Icard-text3">{props.dept}</div>
      
      <button className="button-default" onClick={toggle}>View Experience</button>
 </div>

    </div>
  );
}