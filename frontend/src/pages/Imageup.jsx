import React, { useEffect, useRef, useState } from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import './Imageup.css'
function Imageup() {
    const fileInput = useRef(null);
const [image, setImage ] = useState("");
const [ url, setUrl ] = useState("https://www.annauniv.edu/DIST/assests/images/upload_images/no-photo.gif");
const [upload,setupload]=useState(true);
// const fun=() => {
//     console.log('naffo',imgData);
//     fetch("  https://api.cloudinary.com/v1_1/breellz/image/upload",{
//         method:"post",
//         body: imgData
//         })
//         .then(resp => resp.json())
//         .then(data => {
//             console.log('at',data.url);
//         if(data.url)
//             setUrl(data.url)
//         })
//         .catch(err => console.log(err))
// }
const uploadImage =   () => {

const data = new FormData()
console.log(data);
data.append("file", image);
data.append("upload_preset", "tutorial");
data.append("cloud_name","breellz");


 fetch("https://api.cloudinary.com/v1_1/breellz/image/upload",{
method:"post",
body: data
})
.then(resp => resp.json())
.then(data => {
setUrl(data.url)
console.log(data.url);
setupload(true);
})
.catch(err => console.log(err))
}
return (

<div className="imgHead">
    <div className="upImg">
    <img src={url}  alt="no image"/>
    </div>
<div>
<input style={{display:'none'}} type="file" className="but" onChange= {(e)=> {setImage(e.target.files[0]);console.log('aitf');setupload(false)}}
ref={fileInput}
></input>
</div>
<div>
{upload?<button className="bel"  onClick={()=>fileInput.current.click()}>Pick image</button>
:<button className="bel" onClick={uploadImage}>Upload</button>}
</div>
</div>


)
}

export default Imageup
