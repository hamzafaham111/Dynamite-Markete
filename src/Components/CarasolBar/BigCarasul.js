import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import useStyle from './CarasoulStyle';
import FirstImage from './Assets/carasoulImage1.jpg';
import { Link } from 'react-router-dom';
import './style.css';

const Banner = () =>{
  const classes = useStyle();
return(<>
<Grid container className={classes.banner}>
<Grid item xs={9} sm={6}>
<div className={classes.bannerCaption}>
<Typography className={classes.bannerHeading}>
  Dynamite Market is the best and top rated store on Amazon.
  </Typography>
  <Typography className={classes.bannerParagraph}>
    Dynamite Market is an online retailer of Hp toner cartridges dedicated to excellence.
  </Typography>
 <Link to="/about us"><button className={classes.bannerBtn}>Read More</button></Link>
</div>
</Grid>
</Grid>
</>)
}
export default Banner;









// const ControlledCarousel = () => {
//   const classes = useStyle();
//     const [index, setIndex] = React.useState(0);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//       <Carousel activeIndex={index} onSelect={handleSelect} className={classes.carasoul}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={FirstImage}
//             alt="First slide"
//             style={{height:"50vh"}}
//           />
//           <Carousel.Caption className={classes.carouselCaption}>
//          <Typography variant="h4" className={classes.carasoulHeading}>
//          Dynamite Market is the best and top rated store on Amazon. 
//          </Typography>
//          <Typography className={classes.carasoulParagraph}>
//          Dynamite Market is an online retailer of Hp toner cartridges dedicated to excellence.
//          </Typography>
//          <Button color="primary" variant="contained" className={classes.carouselBtn}>Read More</Button>
//           </Carousel.Caption>
//         </Carousel.Item>        
//       </Carousel>
//     );
//   }
  