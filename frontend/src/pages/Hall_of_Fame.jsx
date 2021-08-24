import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Data from './Data';
import './Hall_of_Fame.css'
function Hall_of_Fame() {
    var backendData=[];
    const [data, setdata] = useState([]);
    useEffect(() => {
  const url ='http://localhost:9000/students';
  axios.get(url)
  
  .then((res)=>{console.log(res.data.data);
    for(var i=0;i<res.data.data.length;i++)
    {console.log(res.data[i]);
        backendData.push(res.data.data[i]);

    }
    setdata(res.data.data);
    console.log(backendData);

    
// setdata(data.data.length);
})
  .catch(error=>console.error('error'));
    }, [])
    
    return (

        <div>

            <h4 className='stats'>Placements Stats</h4>
        <div className="cardStudent">

            {data.map((item)=>{
                return(
                    <div className="student">
                    <Card name={item.name} job={item.position} branch={item.branch} course='cse' batch={item.year} />
                </div>
                )
            })
                
            }

            
        </div>
        </div>
      
    )
}

export default Hall_of_Fame
