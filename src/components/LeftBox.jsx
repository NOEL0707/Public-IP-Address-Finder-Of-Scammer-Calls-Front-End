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
        </div>
    );
}

export default LeftBox;
