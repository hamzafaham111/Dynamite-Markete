import React from 'react'
import { Grid } from '@material-ui/core';
import useStyle from './ForgetPasswordStyle';
export const ForgetPassword = () => {
    const classes = useStyle();
    return (
        <div style={{background:"#F9F9F9",height:"100vh",display:"flex",justifyContent:"center", alignItems:"center"}}>
            <div style={{width:"500px", background:"white", padding:"20px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 6px -1px, rgba(0, 0, 0, 0.06) 0px 1px 2px -1px",}}>
                <Grid container className={classes.container} spacing="2">
                    <span style={{marginBottom:"30px", fontSize:"25px", fontWeight:"bold" }}>Recover Password</span>
                    <Grid item xs={12} className={classes.fieldContainer}>
                        <label className={classes.label} for="email">Email </label>
                        <input className={classes.input} type="text" id="email" name="email" />
                    </Grid>
                    <Grid item xs={12} className={classes.fieldContainer}>
                    Forgot your account’s password or having trouble logging into your Team? Enter your email address and we’ll send you a recovery link.
                    </Grid>
                    <Grid item xs={12}>
                        <button className={classes.loginBtn} variant="contained">Recover Password</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default ForgetPassword;
