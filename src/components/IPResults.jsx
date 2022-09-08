import React from 'react';
import Button from '@mui/material/Button';
import IPResultsTable from './IPResultsTable';
import "../styles/ipresults.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { useEffect } from 'react';

function IPResults(props) {
    const [networkInterface, setNetworkInterface] = React.useState('');
    const [isCapturing,setIsCapturing]=React.useState(false);
    const [ipData,setIPData]=React.useState([]);
    const handleChangeNetworkInterface = (event) => {
        setNetworkInterface(event.target.value);
    };
    async function getIps(params) {
        try {
            const res=await axios.get("http://localhost:4444/getIpResults");
            console.log(res.data.data);
            setIPData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if(isCapturing){
            const timer = setInterval(getIps, 30000);
            return () => clearInterval(timer);
        }
      }, [isCapturing]);

    const handleStartCapturing=async()=>{
        if(networkInterface===''){
            alert("Please Select An Network Interface");
            return;
        }
        try {
            const res=await axios
            .post(`http://localhost:4444/startCapturing`, {networkInterface:networkInterface}, {
              withCredentials: false,
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
              },
            })
            const timer = setTimeout(getIps, 5000);

            console.log(res);
            setIsCapturing(true);

        } catch (error) {
            console.log(error);
        }
    }
    const handleStopCapturing=async()=>{
        try {
            const res=await axios
            .get(`http://localhost:4444/stopCapturing`, {
              withCredentials: false,
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
              },
            })
            console.log(res);
            setIsCapturing(false);

        } catch (error) {
            console.log(error);
        }
    }
  
    return (
        <div className='outer-div'>
            <div className='capture-interfaces-box'>
                <FormControl style={{width:"80%"}}>
                    <InputLabel id="demo-simple-select-label">Select Interfaces</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={networkInterface}
                    label="Select Interfaces"
                    onChange={handleChangeNetworkInterface}
                    >
                        <MenuItem value={"Wi-Fi"}>WIFI</MenuItem>
                        <MenuItem value={"Ethernet"}>Ethernet</MenuItem>
                    </Select>
                </FormControl>
                {!isCapturing && <Button variant="contained" onClick={handleStartCapturing} style={{width:"400px",background:"black"}} fullHeight>Start Capturing</Button>}
                {isCapturing && <Button variant="contained" onClick={handleStopCapturing} style={{width:"400px",background:"black"}} fullHeight>Stop Capturing</Button>}

            </div>
            <div className='location-heading'>
                <p> Filtered IP Addresses</p>
            </div>
            <div className='table-box'>
                <IPResultsTable data={ipData}/>
            </div>

        </div>
    );
}

export default IPResults;