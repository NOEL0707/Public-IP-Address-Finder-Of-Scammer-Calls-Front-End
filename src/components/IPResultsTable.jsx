import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import "../styles/table.css";
import { TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import IPResultsTableRow from './IPResultsTableRow';
import LeftBox from './LeftBox';
import RightBox from './RightBox';
import Map from './Map';
const columns = [

  {
    id: 'IP ADDRESS',
    label: 'IP Address',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Possible ISP/Company',
    label: 'Possible ISP/Company',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'View',
    label: 'Options',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  }

];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function IPResultsTable(props) {
  const [selectedIndex,setSelectedIndex]=React.useState(0);
  const getSelectedIndex = (data) => {
    setSelectedIndex(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }
  return (
    <div className='outer-div' style={{justifyContent:"center",alignItems:"center"}}>
      <Paper sx={{ width: '80%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <StyledTableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {props.data.length>0 && props.data
                .map(({ipAddr,isp},index) => {
                  return (
                    <IPResultsTableRow key={index} ipAddress={ipAddr} possibleISP={isp} index={index} sendSelectedindex={getSelectedIndex}/>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {!props.isAnalysing  && props.data.length===0 &&  !props.isCapturing && !props.didCapturedOnce && 
        <div style={{textAlign:"center",fontSize:"xx-large",width:"100%",color:"red"}}>Please Start Capturing To See Results</div>
      }
      { !props.isAnalysing  &&  props.data.length===0 &&  props.isCapturing && !props.didCapturedOnce &&
        <div style={{textAlign:"center",fontSize:"xx-large",width:"100%",color:"black"}}> Fetching IP'S ...</div>
      }
      {!props.isAnalysing  &&  props.didCapturedOnce && props.data.length===0 && props.isCapturing &&
        <div style={{textAlign:"center",fontSize:"xx-large",width:"100%",color:"red"}}> NO IP's Found Will Scan For More</div>

      }
        
        {props.isAnalysing && <div style={{textAlign:"center",fontSize:"xx-large",width:"100%",color:"red"}}>Wait For Results</div> }
      <div className='location-heading'>
        <p> Location on Map</p>
      </div>
      {!props.isAnalysing  && props.data.length===0 && 
        <div style={{textAlign:"center",fontSize:"xx-large",width:"100%",color:"red"}}> NO Location Selected</div>
      }
      {props.data && props.data
        .map(({ipAddr,isp,organization,asn,latitude,longitude,country,region,city,zipCode},index) => {
          if(index===selectedIndex){
            return(
              <div key={index} className="location-details">
                <LeftBox ipAddr={ipAddr} isp={isp} organization={organization} asn={asn}/>
                <Map latitude={latitude} longitude={longitude}/>
                <RightBox latitude={latitude} longitude={longitude} country={country} region={region} city={city} zipCode={zipCode}/>
              </div>
            )
          }
          else{
            return (<div></div>);
          }
        })}

      </div>
  );
}
