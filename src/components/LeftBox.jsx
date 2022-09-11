import { Divider } from '@mui/material';
import * as React from 'react';
import "../styles/locationdetails.css"

function LeftBox(props) {
    return (
        <div className='left-box'>
            <div className='heading-box'>
                Organisation Info
            </div>
            <div className='content'>
                <p className='heading-name'> IP Address</p>
                <p className='heading-value'>{props.ipAddr}</p>
            </div>
            <Divider/>
            <div className='content'>
                <p className='heading-name'> Organization</p>
                <p className='heading-value'>{props.organization}</p>
            </div>
            <Divider/>

            <div className='content'>
                <p className='heading-name'> Internet Service Provider</p>
                <p className='heading-value'>{props.isp}</p>
            </div>
            <Divider/>

            <div className='content'>
                <p className='heading-name'> ASN</p>
                <p className='heading-value'>{props.asn}</p>
            </div>
            <div className='content'>
                <p className='heading-name'>Date Time</p>
                <p className='heading-value'>{props.dateTime}</p>
            </div>
        </div>
    );
}

export default LeftBox;
