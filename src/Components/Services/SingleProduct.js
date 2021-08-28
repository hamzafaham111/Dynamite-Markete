import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import Chair from './Assets/chair.jpg';
import useStyle from './OurProductsStyle';

const SingleProduct=(Props)=> {
  const classes = useStyle();

  return (
    <Card className={classes.root} >
      <CardActionArea className={classes.effects} disableRipple disabled>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={Props.image}
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom component="h2" className={classes.name}>
          {Props.name}
          </Typography>   
        <div className={classes.priceBtnTogather}>
           <Typography gutterBottom component="h2" className={classes.price}>
            {Props.price}
           </Typography>
            <button className={classes.addCartButton}>Add to cart</button>
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default SingleProduct;