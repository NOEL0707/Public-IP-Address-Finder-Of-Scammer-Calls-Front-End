import React from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
function PhoneInfoga(props) {
    const [ip,setIp]=React.useState("");
    const [isScanning,setIsScanning]=React.useState(false);
    const [data,setData]=React.useState([]);
    const handleChangeIP=(e)=>{
        setIp(e.target.value)
    }
    const handleStartScanning=async()=>{
        setIsScanning(true);
        if(ip===''){
            alert("Please Select A Scan Type");
            return;
        }
        try {
          console.log(ip);
            const res=await axios.post('http://localhost:4444/phoneinfoga',{number:ip},{
              withCredentials: false,
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
              },
            })
            console.log(res);
            setIsScanning(false);
            setData(res.data.result);
        } catch (error) {
            setIsScanning(false);

            console.log(error);
        }
    }
    return (
        <div style={{display:'flex',width:"100%",flexDirection:"column",alignItems:"center"}}>
            <div className='capture-interfaces-box' style={{gap:"20px",height:"50px",width:"auto",padding:"0px"}}>
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" onChange={handleChangeIP}/>

                {<Button variant="contained" onClick={handleStartScanning} style={{width:"400px",background:"black",height:"50px"}} fullHeight>Find Traces</Button>}
            </div>
            <div style={{width:"80%",height:"auto",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"rgb(30 40 58/var(--tw-text-opacity))"}}>
                {isScanning &&<div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"grey"}}>
                    <p style={{color:"grey",fontSize:"x-large"}}>Scanning Please Wait For Results...</p>
                </div>}
                {data.length===0 && !isScanning && <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"grey"}}>
                <p style={{color:"grey",fontSize:"x-large"}}>No Results Found/Press Scan Button</p>
                </div>}
                {data.length!==0 && !isScanning && <div style={{color:"white",width:"100%",height:"auto",margin:"auto"}}> 
                <JSONPretty id="json-pretty" data={data}></JSONPretty>
                </div>}
            </div>
        </div>

    );
}

export default PhoneInfoga;