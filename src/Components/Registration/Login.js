import React from 'react'
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import useStyle from './LoginRegistrationStyle';
const Login = () => {
    const classes = useStyle();
    return (
        <div>
            <Grid container>
              <Grid item xs={12} md={6} className={classes.login1}>
                <span style={{marginBottom:"30px", fontSize:"25px", fontWeight:"bold" }}>Login</span>
                <Grid container className={classes.container} spacing="2">
                   <Grid item xs={12} className={classes.fieldContainer}>
                   <label className={classes.label} for="email">Username or email address * </label>
                    <input className={classes.input} type="text" id="email" name="email" />
                   </Grid>
                   <Grid item xs={12} className={classes.fieldContainer}>
                   <label className={classes.label}  for="password">Password * </label>
                    <input className={classes.input} type="text" id="password" name="password" />
                   </Grid>
                   <Grid item xs={12} style={{marginTop:"20px",}}>
                   <Checkbox
                   name="checkedB"
                    color="primary"
                  /> 
                  <span>Remember me</span>
                   </Grid>
                   <Grid item xs={12}>
                       <button className={classes.loginBtn} variant="contained">Login</button>
                   </Grid>
                   <span>
                     <Link to="/forget password" style={{textDecoration:"none"}}>Forget Password</Link>
                   </span>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} className={classes.login2}>
                <span style={{marginBottom:"30px", fontSize:"25px", fontWeight:"bold" }}>Register</span>
                <Grid container className={classes.container} spacing="2">
                   <Grid item xs={12} className={classes.fieldContainer}>
                   <label className={classes.label} for="email">email address * </label>
                    <input className={classes.input} type="text" id="email" name="email" />
                   </Grid>
                   <Grid item xs={12} className={classes.fieldContainer}>
                      <p>A password will be sent to your email address.</p>
                      Your personal data will be used to support your experience throughout this website, to manage access to your account, 
                      and for other purposes described in our privacy policy.
                   </Grid>
                   <Grid item xs={12}>
                       <button className={classes.loginBtn} variant="contained">Register</button>
                   </Grid>
                </Grid>
              </Grid>
            </Grid>
        </div>
    )
}
export default Login;
