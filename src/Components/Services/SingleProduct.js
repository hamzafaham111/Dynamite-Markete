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
          <Typography gutterBottom component="h2" className={classes.price}>
          {Props.name}
          </Typography>   
        <div style={{display:"flex", flexDirection:"row"}}>
           <Typography gutterBottom component="h2" style={{flex:1}}>
            {Props.price}
           </Typography>
            <span style={{border:"solid #C2C2C2 1px", padding:"2px 7px 2px 7px", borderRadius:"5px"}}><AddIcon style={{fontSize:"15px"}}/></span>
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default SingleProduct;