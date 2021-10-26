import React, { useEffect, useState } from 'react';
import './Home.css'
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios';

function Home() {
  const [placementData,setPlacementData]=useState([])
  const [tuples,setTuples]=useState([])
  const [offersCount,setOffersCount]=useState(0)
  const [companyCount,setCompanyCount]=useState(0)
  const [placementBatch,setPlacementBatch]=useState("")
  useEffect(async ()=>{
    const url2 = `http://localhost:9000/placement`;
    await axios.get(url2)
      .then((res) => {
        console.log(res.data.result);
          setPlacementData(res.data.result);
          setPlacementBatch("2022")
      })
      .catch(error => console.error('error'));
      
  },[])

  useEffect(async()=>{
     

      let tuplesList=[]
      let companies=0
      let offers = 0
      for(let i=0;i<placementData.length;i++){
        let c=0
        if(placementData[i]["batch"]!=placementBatch)continue;
        for(let j=0;j<placementData[i]["branch"].length;j++){
          c=c+placementData[i]["branch"][j].count;
        }
        offers=offers + c
        companies = companies + 1

        var row = {
          company:placementData[i]["company"],
          batch:placementData[i]["batch"],
          ctc: String(placementData[i]["lowestsalary"])+"LPA" + 
            ((placementData[i]["lowestsalary"]===placementData[i]["highestsalary"])?"":"-"+String(placementData[i]["highestsalary"])+"LPA"),
          
          count: c
        }
       
        tuplesList.push(row);
      }
      setOffersCount(offers);
      setCompanyCount(companies);
      setTuples(tuplesList);
  }, [placementBatch])

  // useEffect(()=>{
  //   console.log("setting placement batch")
  //   setPlacementBatch("2022")
  // },[placementData])

  let titlestring = "Placement Statistics Placement Cell, MMMUT"
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

 const columns= [
  
   
  
    { title: 'Company', field: 'company',
      cellStyle:{
        color:"#168ddc"
      }
    
    },
    
    {
      title: 'Batch',
      field: 'batch',

    },
    {
      title: 'Package',
      field: 'ctc',
      cellStyle:{
        color:"orange"
      }
      
    },
    {
      title: 'Placed',
      field: 'count',
      cellStyle:{
        color:"#168ddc"
      }
      
    },
  
  ];


  
  return (
    <div className='sub'>
     <div className="heading">Welcome to MMMUT Placement Portal  
      <select name="placementBatch" id="placementBatch" className="home-select" onChange={(e)=>{
          setPlacementBatch(e.target.value);
          
        }} style={{"float":"right"}}>
          <option value="2022">Placements 2021-22</option>
          <option value="2021">Placements 2020-21</option>
        
          
        </select> 
      </div> 
      <div>
      
      </div>
        <div className="table">
          
          <MaterialTable
        
            title={titlestring}
            columns={columns}
            data={tuples}
            options={{
              search: false,
              sorting: false,
              paging:false,
              headerStyle: {
                zIndex:0,
                backgroundColor:'#f3f1ee',
                fontSize:'20px',
              }
            }}
          

          />
          

            

      </div>

      <div className="home-stats-count">
        <div>
          <h3>{companyCount}+ </h3>
          <p>No. of Companies visited</p>
        </div>

        <div>
          <h3>{offersCount}+ </h3>
          <p>Pre-Placement Offers</p>
        </div>
       
      </div>
    </div>
  );
}

export default Home;
