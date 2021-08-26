import React from 'react'
import { Grid } from '@material-ui/core';
const Footer = () => {
    return (
        <div>
            <footer style={{background:"#040425"}}>
                <Grid container style={{width:"70vw"}}>
                    <Grid item xs={4}>
                        Hellow
                    </Grid>
                    <Grid item xs={4}>
                        Hellow
                    </Grid>
                    <Grid item xs={4}>
                        Hellow
                    </Grid>
                </Grid>
            </footer>
        </div>
    )
}
export default Footer;
