import React from 'react'
import Products from '../SingleProduct';
import Data from './bestServiceApi';
import { Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyle from '../OurProductsStyle';

const BestSellingProducts = () => {
    const classes = useStyle();
    return (
        <div id="products">
           <div className={classes.productBackground} >
           <Container className={classes.ourProducts}>
                <Grid container style={{margin:"auto"}}>
                   <Grid container>
                   <Typography variant="h5" align="center" className={classes.topHeading}>
                        Best Selling Products
                    </Typography>
                   </Grid>
                    {
                        Data.map((data)=>{
                           return(
                               <Grid item xs={12} sm={6} lg={3} >
                                   <Link className={classes.link} to="detail" >
                                <Products 
                                name={data.name} 
                                price={data.Price}
                                image = {data.Image}/>
                               </Link>
                                </Grid>  
                           )
                        })
                    }
                </Grid>
            </Container>
           </div>
        </div>
    )
};
export default BestSellingProducts;
