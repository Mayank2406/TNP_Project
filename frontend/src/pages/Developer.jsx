import "./Developer.css";
import CardTeam from "./components/CardDeveloper";
import DataCard from "./DataCard.jsx";
import Data2 from "./Data2.jsx";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import reactDom from "react-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function ncards(val){
  return(
    <CardTeam
    image={val.image}
    description={val.description}
    job_pos={val.job_pos}
    dept={val.dept}
    email={val.email}
    linkdin={val.linkdin}
    instagram={val.instagram}
    />
     

  );
 
}

function Team() {
    const recipeAuthor = "Efecan";
    const classes = useStyles();
    return (
  
    <div className="mainDeveloper">
    
    <h4 className="headingDeveloper"> Developers  </h4>
    
  <Grid container  spacing={3} justifyContent="center" alignItems="center">
    <Grid item xs={10}>
      <Paper className={classes.paper} style={{ border: "1px solid grey" }}>

    <div className="TeamDeveloper">
      <header className="App-header-Developer">
      
        {DataCard.map(ncards)}

      </header>
    </div>

     </Paper>
    </Grid>
   </Grid> 
  
          </div>
    )
}

export default Team
