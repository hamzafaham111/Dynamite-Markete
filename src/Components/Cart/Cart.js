import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
import useStyle from './CartStyle';
import { Button } from '@material-ui/core';
import { RightSideCart } from './RightSideCart';
import Data from '../Services/CardsApi';
const Cart = () => {
    const classes = useStyle();
    return (
        <div style={{background:"white", padding:"10px"}}>
           <div className={classes.cartHeader}>
                <h1>Shoping Cart</h1>
                <h4>Shop</h4>
           </div>
           <div>
                   <Grid container style={{marginRight:"50px"}}>
                        <Grid container item xs={12}md={9}  className={classes.paddingRight}>
                            <Grid container item xs={12} className={classes.topTags}>
                                <Grid item xs={5}>Product</Grid>
                                <Grid className={classes.gridContent}  item xs={2}>Price</Grid>
                                <Grid className={classes.gridContent}  item xs={2}>Quantity</Grid>
                                <Grid className={classes.gridContent}  item xs={2}>Totle</Grid>
                                <Grid className={classes.gridContent}  item xs={1}>Remove</Grid>
                            </Grid>
                            {
                            Data.map((val, index)=>{
                            return(
                                <Grid container item xs={12} className={classes.cartProduct} style={{margin:"auto"}}>
                                    <Grid className={classes.imageGrid} item xs={12} md={5}>
                                        <img className={classes.productImage} src={val.Image} alt="product Image"/>
                                        <span className={classes.cartProductName}>{val.name}</span>
                                    </Grid>
                                    <Grid className={classes.gridContent} item xs={12} md={2}>{val.Price}</Grid>
                                    <Grid className={classes.gridContent}  item xs={12} md={2}>
                                    <span className={classes.QuantityBtn}>
                                    <span className={classes.btn}>-</span><input className={classes.input} type="text" value={0}/><span className={classes.btn}>+</span>
                                    </span>
                                    </Grid>
                                    <Grid className={classes.gridContent}  item xs={12} md={2}>100</Grid>
                                    <Grid className={classes.gridContent}  item xs={12} md={1}>
                                        <span className={classes.remove}>X</span>
                                    </Grid>
                                </Grid>
                                    )
                                })
                            }
                        </Grid>

                        <Grid className={classes.gridContentRS}  item xs={12} md="3">
                            <RightSideCart/>
                        </Grid>
                    </Grid>
           </div>
        </div>
    )
}
export default Cart;
