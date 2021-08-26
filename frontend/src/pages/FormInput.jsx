import React, { useState } from 'react'
import axios from 'axios';
import './FormInput.css'
function FormInput() {
    const sendData=()=>{
        axios.post('/students',{
            imageUrl:image,
            name:name,
            position:position,
            branch:branch,
            course:course,
            type:placement,
            salary:salary,
            year:year,
            interviewExperience:interview
        }).then((res)=>console.log(res))
        .catch((e)=>console.log("unsuccessfull submission"));

        console.log(name,image,position,branch,course,placement,salary,year,interview);

    }
    const [name, setname] = useState('')
    const[image,setimage]=useState('');
    const [position, setposition] = useState('')
    const[branch,setbranch]=useState("Branch");
    const[course,setcourse]=useState('');
    const [placement, setplacement] = useState('')
    const[salary,setsalary]=useState('');
    const [year, setyear] = useState('')
    const[interview,setInterview]=useState();

    
    return (
        
        <div>
            
    <label for="email"><b>imageUrl</b></label>
    <input type="text" value={image} onChange={(e)=>{
        setimage(e.target.value);
    }} placeholder="Enter Image Url" required/><br />



    <label for="name"><b>Name</b></label>
    <input type="text" value ={name}  onChange={(e)=>{
        setname(e.target.value);
    }} placeholder="Enter name"  required/><br />



    <label for="Position"><b>Job Position</b></label>
    <input type="text"  onChange={(e)=>{
        setposition(e.target.value);
    }}value={position} placeholder="Enter Post"  required/><br />

<label for="course"><b>course</b></label>
<select value={course} onChange={(e)=>{setcourse(e.target.value)}} >
    <option value="b.tech">B.tech</option>
    <option value="MCA">MCA</option>
</select>
<br />
    <label for="branch" ><b>select branch </b></label>
    <select  value={branch} onChange={(e)=>{setbranch(e.target.value)}} >
        
        <option value="CS">CSE</option>
        <option value="ECE">ECE</option>
        <option value="EE">EE</option>
        <option value="CE">CE</option>
        <option value="ME">ME</option>
    </select>
    
    <br />

    <label for="placement"><b>placement type</b></label>
    <select  value={placement} onChange={(e)=>{setplacement(e.target.value)}} >
        
        <option value="on-campus">on-campus</option>
    <option value="off-campus">off-campus</option>
    </select>
    
    <br />


    <label for="salary"><b>Package</b></label>
    <input type="text" value={salary}  onChange={(e)=>{
        setsalary(e.target.value);
    }} placeholder="Enter package" name="salary" id="salary" required/><br />



    <label for="year"><b>Graduation year</b></label>
    <input type="text"  onChange={(e)=>{
        setyear(e.target.value);
    }} value={year} placeholder="Enter year" name="year" id="year" required/><br />



    <label for="Interview"><b>interview Experience</b></label>
    <textarea type="textarea"  onChange={(e)=>{
        setInterview(e.target.value);
    }} value={interview} placeholder="Enter Interview Experience" name="Interview" id="Interview" required/><br />
<button onClick={sendData}>submit</button>
        </div>
    )
}

export default FormInput
