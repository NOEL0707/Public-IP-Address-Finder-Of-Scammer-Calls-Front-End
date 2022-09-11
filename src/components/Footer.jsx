import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';

const color = red[500];

function Footer(props) {
    return (
        <div style={{width:"100%",height:"70px",background:"black",color:"white",marginTop:"auto",textAlign:"center",display:"flex",alignItems:"center",
        justifyContent:"center",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        }}>
            <p>With<FavoriteIcon sx={{ color: color}}/>The Trio: Noel Pranav Vishnu</p>
        </div>
    );
}

export default Footer;