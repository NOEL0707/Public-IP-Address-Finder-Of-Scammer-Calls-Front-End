import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
function Nmap(props) {
    const [ip,setIp]=React.useState("");
    const [scantype,setScanType]=React.useState("");
    const [isScanning,setIsScanning]=React.useState(false);
    const [data,setData]=React.useState([]);
    const handleChangeScanType=(e)=>{
        setScanType(e.target.value);
    }
    const handleChangeIP=(e)=>{
        setIp(e.target.value)
    }
    const handleStartScanning=async()=>{
        setIsScanning(true);
        if(scantype===''){
            alert("Please Select A Scan Type");
            return;
        }
        try {
            const res=await axios
            .post(`http://localhost:4444/nmapscan`, {"ip":ip,"scantype":scantype}, {
              withCredentials: false,
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
              },
            })
    
            console.log(res);
            setIsScanning(false);
            setData(res.data.data);
        } catch (error) {
            setIsScanning(false);

            console.log(error);
        }
    }
    return (
        <div style={{display:'flex',width:"100%",flexDirection:"column",alignItems:"center"}}>
            <div className='capture-interfaces-box' style={{gap:"2px"}}>
                <TextField id="outlined-basic" label="IP-Address" variant="outlined" onChange={handleChangeIP}/>
                <FormControl style={{width:"80%"}}>
                    <InputLabel id="demo-simple-select-label">Select ScanType</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={scantype}
                    label="Select Interfaces"
                    onChange={handleChangeScanType}
                    >
                        <MenuItem value={1}>"1"</MenuItem>
                        <MenuItem value={2}>"2"</MenuItem>
                    </Select>
                </FormControl>
                {<Button variant="contained" onClick={handleStartScanning} style={{width:"400px",background:"black"}} fullHeight>Start Scanning</Button>}
            </div>
            <div style={{width:"80%",height:"auto",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",background:"rgb(30 40 58/var(--tw-text-opacity))"}}>
                {isScanning &&<div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",color:"grey"}}>
                    <p style={{color:"grey",fontSize:"x-large"}}>Scanning Please Wait For Results...</p>
                </div>}
                {!isScanning && <div style={{color:"white",width:"100%",height:"auto",margin:"auto"}}> 
                <JSONPretty id="json-pretty" data={data}></JSONPretty>
                </div>}
            </div>
        </div>

    );
}

export default Nmap;