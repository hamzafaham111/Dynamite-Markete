import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import PlaceOrderDetailsRight from './placeOrderDetailsRight';
import useStyle from './PlaceOrderStyle';
const PlaceOrder = () => {
    const classes = useStyle()
    return (
        <div>
            <div className={classes.cartHeader}>
                <h1>Place Your Order</h1>
                <h4>Shop</h4>
           </div>
           <form>
               <Grid container>
                <Grid item xs={12} md={6} spacing="2" style={{padding:"30px"}}>
                    <Grid container>
                        <Typography variant="h5" className={classes.topHeading}>
                            Order details
                        </Typography>
                   </Grid>
                   <Grid container spacing="2">
                   <Grid className={classes.formFont} item xs= {12} md={6}>
                        <label>First Name*</label>
                        <input className={classes.input} type = "text"/>
                    </Grid>
                    <Grid className={classes.formFont} item xs= {12} md={6}>
                        <label>Last Name*</label>
                    <input className={classes.input} type = "text"/>
                    </Grid>
                   </Grid>
                    <Grid className={classes.formFont} item xs= {12}>
                        <label>Street address*</label>
                    <input className={classes.input} type = "text" placeholder="House number street name"/><br/>
                    <input className={classes.input} type = "text" placeholder="Apartment, suite, unit, etc (optional)"/>
                    </Grid>
                    <Grid className={classes.formFont} item xs= {12}>
                        <label>Town/City</label>
                    <input className={classes.input} type = "text" />
                    </Grid>
                    <Grid className={classes.formFont} item xs= {12}>
                        <label>Phone</label>
                    <input className={classes.input} type = "text" />
                    </Grid>
                    
                    <Grid className={classes.formFont} item xs= {12}>
                        <label>Email Address</label>
                    <input className={classes.input} type = "text" />
                    </Grid>
                   
                    <Grid container spacing="2">
                   <Grid className={classes.formFont} item xs= {12} md={6}>
                        <label>Card Holder Name*</label>
                        <input className={classes.input} type = "text"/>
                    </Grid>
                    <Grid className={classes.formFont} item xs= {12} md={6}>
                        <label>Card Number*</label>
                    <input className={classes.input} type = "text"/>
                    </Grid>
                   </Grid>

                   <Grid container spacing="2">
                   <Grid className={classes.formFont} item xs= {12} md={6}>
                        <label>Expiration Month*</label>
                        <input className={classes.input} type = "text" placeholder="example: March"/>
                    </Grid>
                    <Grid className={classes.formFont} item xs= {12} md={6}>
                        <label>Expiration Year*</label>
                    <input className={classes.input} type = "Text" placeholder="example: 2021"/>
                    </Grid>
                   </Grid>
                    
                   <Grid className={classes.formFont} item xs= {12}>
                        <label>CVC Number</label>
                    <input className={classes.input} type = "text" />
                    </Grid>
                    
                    <Grid className={classes.formFont} item xs={12}>
                    <button className={classes.btnStyle} variant="contained" type="submit">Place Your Order</button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} style={{ marginTop:"20px", padding:"20px"}}>
                         <PlaceOrderDetailsRight/>   
                </Grid>
                </Grid>
                </form>
        </div>
    )
}
export default PlaceOrder;