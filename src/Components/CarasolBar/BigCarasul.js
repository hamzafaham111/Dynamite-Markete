import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import useStyle from './CarasoulStyle';
import FirstImage from './Assets/carasoulImage1.jpg';
import './style.css';
const ControlledCarousel = () => {
  const classes = useStyle();
    const [index, setIndex] = React.useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className={classes.carasoul}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstImage}
            alt="First slide"
            style={{height:"50vh"}}
          />
          <Carousel.Caption className={classes.carouselCaption}>
         <Typography variant="h4" className={classes.carasoulHeading}>
         Dynamite Market is the best and top rated store on Amazon. 
         </Typography>
         <Typography className={classes.carasoulParagraph}>
         Dynamite Market is an online retailer of Hp toner cartridges dedicated to excellence.
         </Typography>
         <Button color="primary" variant="contained" className={classes.carouselBtn}>Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>        
      </Carousel>
    );
  }
  
export default ControlledCarousel;