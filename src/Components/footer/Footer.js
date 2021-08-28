import React from 'react'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer style={{background:"#624F8C", paddingTop:"20px"}}>
                <Grid container style={{maxWidth:"700px",margin:"auto",}}>
                <Grid item xs={6} style={{textAlign:"center"}}>
                    <Link to="/about us" style={{textDecoration:"none",color:"white"}}>About Us</Link>
                </Grid>
                <Grid item xs={6} style={{textAlign:"center"}}>
                    <Link to="/contact us" style={{textDecoration:"none",color:"white"}}>Contact Us</Link>
                </Grid>
                </Grid>
                <Grid container style={{color:"white",}}>
                    <p style={{textAlign:"center", width:"100%",marginTop:"20px"}}>CopyRight2021@ Dynamite Market</p>
                </Grid>
            </footer>
        </div>
    )
}
export default Footer;
