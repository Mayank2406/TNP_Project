import "./Team.css";
import CardTeam from "./components/CardTeam";
import DataFaculty from "./DataFaculty.jsx";
import DataCoordinator from "./DataCoordinator.jsx";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import reactDom from "react-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
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
    phone={val.phone}
    email={val.email}
    />
     

  );
 
}

function Team() {
    const recipeAuthor = "Efecan";
    const classes = useStyles();
    return (
        <div>
            <div className="main">
    
    <h4 className="heading1"> Faculty In-charge  </h4>
    
  <Grid container  spacing={3} justifyContent="center" alignItems="center">
    <Grid item xs={10}>
      <Paper className={classes.paper}>

    <div className="Team">
      <header className="App-header">
      
        {DataFaculty.map(ncards)}

      </header>
    </div>

     </Paper>
    </Grid>
   </Grid> 
  
   <h4 className="heading1">  Student Placement Co-ordinators (B.Tech.)  </h4>
    
   <Grid container spacing={3} justifyContent="center" alignItems="center">
    <Grid item xs={10}>
      <Paper className={classes.paper}>

    <div className="Team">
      <header className="App-header">
      
        {DataCoordinator.map(ncards)}

      </header>
    </div>

     </Paper>
    </Grid>
   </Grid> 

   </div>
        </div>
    )
}

export default Team