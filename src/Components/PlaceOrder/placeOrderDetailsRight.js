import { Container, Typography, Grid } from '@material-ui/core'
import React from 'react'
import useStyle from './PlaceOrderStyle'
const PlaceOrderDetailsRight = () => {
    const classes = useStyle();
    return (
          <>
          <h3 className={classes.textBold3}>Your order</h3>
            <Grid container className={classes.placeOrderRSDetailsElementHead}>
              <span style={{marginRight:"auto"}}>Products</span>
              <span>subTotal</span>
            </Grid>  
            <Grid container className={classes.placeOrderRSDetailsElement}>
              <span style={{marginRight:"auto"}}>Serento Leather 3 Seater Sofa  × 2</span>
              <span>$200</span>
            </Grid>  
            <Grid container className={classes.placeOrderRSDetailsElement}>
              <span style={{marginRight:"auto"}}><b>Subtotal</b></span>
              <span>	<b>$1,200.00</b></span>
            </Grid>  
            <Grid container className={classes.placeOrderRSDetailsElement}>
              <span style={{marginRight:"auto"}}><b>Shipping</b></span>
             <div style={{display:"flex", flexDirection:"column"}}>
             <span><input type="radio" name="shipping"/> <b>Basic</b></span>
             <span><input type="radio" name="shipping"/> <b>Standerd</b></span>
             </div>
            </Grid>  
            <Grid container className={classes.placeOrderRSDetailsElement}>
              <span style={{marginRight:"auto"}}><b>Total</b></span>
              <span><b>$200</b></span>
            </Grid>  
                           
       </> 
    )
}
export default PlaceOrderDetailsRight;
