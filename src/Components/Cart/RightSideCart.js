import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import useStyle from './CartStyle'
import CachedIcon from '@material-ui/icons/Cached';
import { Link } from 'react-router-dom';
export const RightSideCart = () => {
        const classes = useStyle();
    return (
        <div>

        <Grid container className={classes.rightSide}>
            <Typography className={classes.firstHeadingRS}>Cart Total</Typography>
          <Grid container className={classes.subTotalGrid}>    
              <span className={classes.subTotal}>SubTotal</span>
              <span>2000</span>
          </Grid>


          <div style={{width:"100%"}}>
          <Typography align="left">Shipping:</Typography>
          <Grid container style={{display:"flex", flexDirection:"row", alignItems:"center", padding:"10px 0 10px 0", }}>
                  <input type="radio" name="shipping" style={{marginRight:"10px"}}/> <span className={classes.flex}> Free Shipping</span><span style={{marginLeft:"auto"}}>$0.00</span>
          </Grid>
          </div>

          <div style={{width:"100%"}}>
          <Grid container style={{display:"flex", flexDirection:"row", alignItems:"center", padding:"10px 0 10px 0"}}>
                  <input type="radio" name="shipping" style={{marginRight:"10px"}}/> <span className={classes.flex}> Standard:</span><span style={{marginLeft:"auto"}}>$0.00</span>
          </Grid>
          </div>

          <div style={{width:"100%"}}>
          <Grid container style={{display:"flex", flexDirection:"row", alignItems:"center", padding:"10px 0 10px 0"}}>
                  <input type="radio" name="shipping" style={{marginRight:"10px"}}/> <span className={classes.flex}> Express:</span><span style={{marginLeft:"auto"}}>$0.00</span>
          </Grid>
          </div>

          <Grid container className={classes.totalGrid}>    
              <span className={classes.subTotal}>Total</span>
              <span>2000</span>
          </Grid>

          <Grid container>
             <Link to="/place order" style={{width:"100%", textDecoration:"none",}}>
             <button className={classes.btnRS}>PROCEED TO CHECKOUT</button>
             </Link>
          </Grid>
          </Grid>
          <Grid container>
          <Link to="/" style={{width:"100%", textDecoration:"none", border:"none"}}>
          <Button endIcon={<CachedIcon/>} className={classes.continueShopingBtn}>CONTINUE SHOPING</Button>    
          </Link>
          </Grid>  
        </div>
    )
}
