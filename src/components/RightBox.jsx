import { Divider } from '@mui/material';
import * as React from 'react';
import "../styles/locationdetails.css"
// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
function RightBox(props) {
    return (
        <div className='left-box'>
            <div className='heading-box'>
                Location Info
            </div>
            <div className='content'>
                <p className='heading-name'> Country</p>
                <p className='heading-value'>{props.country}</p>
            </div>
            <Divider/>
            <div className='content'>
                <p className='heading-name'>Region</p>
                <p className='heading-value'>{props.region}</p>
            </div>
            <Divider/>

            <div className='content'>
                <p className='heading-name'>city</p>
                <p className='heading-value'>{props.city}</p>
            </div>
            <Divider/>

            <div className='content'>
                <p className='heading-name'>Zip Code</p>
                <p className='heading-value'>{props.zipCode}</p>
            </div>
            <Divider/>

            <div className='content'>
                <p className='heading-name'>Latitude and Longitude</p>
                <p className='heading-value'>{props.latitude},{props.longitude}</p>
            </div>
        </div>
    );
}

export default RightBox;
