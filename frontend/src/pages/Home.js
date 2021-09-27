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
  const [cse,setcse]=useState(0)


  
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
   
  
    { title: 'Branch', field: 'branch' },
    { title: 'OFFERS', field: 'offers', type: 'numeric' },
    {
      title: 'PLACED',
      field: 'placed',

    },
    {
      title: 'PLACEMENT',
      field: 'placement',

    },
    {
      title: 'HIGHEST',
      field: 'highest',
      
    },
    {
      title: 'AVERAGE',
      field: 'average',
      
    },
  
  ];

  const tuples= [
    { branch: 'Computer Science', offers: 'Baran', placement: cse, highest: 63,average:3.4 },
    { branch: 'Electronic & Comm.', offers: 'Baran', placement: 19, highest: 63,average:3.4 },
    { branch: 'Eelectrical', offers: 'Baran', placement: 19, highest: 63,average:3.4 },
    { branch: 'Mecanical', offers: 'Baran', placement: 19, highest: 63,average:3.4 },
    { branch: '	Civil', offers: 'Baran', placement: 19, highest: 63,average:3.4 },
    { branch: 'Chemical', offers: 'Baran', placement: 19, highest: 63,average:3.4 },
   
  ];
  return (
    <div className='sub'>
     <div className="heading">Welcome to MMMUT Placement Portal</div> 
      
        <div className="table">
          
    <MaterialTable
  
      title="UG Placement Statics 2020-2021 
      Placement Cell,MMMUT,Gk"
      columns={columns}
      data={tuples}
      icons={tableIcons}
      options={{
        search: false,
        paging:false,
        headerStyle: {
          zIndex:0,
          backgroundColor:'gray',
        fontSize:'20px',
        }
      }}
     

    />
          

            

      </div>
    </div>
  );
}

export default Home;
