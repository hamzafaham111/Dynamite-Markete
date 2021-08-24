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
           <Container>
           <form>
                <Grid container>
                <Grid container item xs={12} sm={6} spacing="2">
                <Grid container>
                <Typography variant="h5" className={classes.topHeading}>
                Billing details
                   </Typography>
                   </Grid>
                    <Grid className={classes.formFont} item xs= {12} md={6}>
                        <label>First Name*</label>
                        <input className={classes.input} type = "text"/>
                    </Grid>
                    <Grid className={classes.formFont} item xs= {12} md={6}>
                        <label>Last Name*</label>
                    <input className={classes.input} type = "text"/>
                    </Grid>
                    <Grid className={classes.formFont} item xs= {12}>
                        <label>Street address*</label>
                    <input className={classes.input} type = "text" placeholder="House number street name"/>
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
                   
                    
                    <Grid className={classes.formFont} item xs={12}>
                    <Button className={classes.btnStyle} variant="contained" type="submit">Place Your Order</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={6} >
                             <PlaceOrderDetailsRight/>     
                </Grid>
                </Grid>
                </form>
           </Container>
        </div>
    )
}
export default PlaceOrder;