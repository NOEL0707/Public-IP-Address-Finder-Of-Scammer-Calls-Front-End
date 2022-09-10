import { Divider } from '@mui/material';
import * as React from 'react';
import "../styles/locationdetails.css"
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
