import React from "react";
import "./Interview_card.css";
import Profilephoto1 from "../assets/Profilephoto1.png"; // Tell webpack this JS file uses this image
import { makeStyles } from '@material-ui/core/styles';
import Modal from "./Modal";
import useModal from './useModal';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



export default function Card(props) {
    const {isShowing, toggle} = useModal();
  const classes = useStyles();

  return (
    <div className="Icard">
      <div className="Icard-header">
        <div className="Icard-title-group">
          <h5 className="Icard-title">{props.title}</h5>
        </div>
      </div>
      <img className="Icard-image" width={100} height={100} src={props.image} alt="Logo" />
      <div className="Icard-text1" >{props.description}</div>
      <div className="Icard-text2">{props.job_pos}</div>
      <div className="Icard-text3">{props.dept}</div>
      
      <button className="button-default" onClick={toggle}>View Experience</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />

    </div>
  );
}