import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import useStyle from './CarasoulStyle';
import FirstImage from './Assets/FirstImage.jpg';
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
            src=""
            alt="First slide"
            style={{height:"50vh"}}
          />
          <Carousel.Caption style={{textAlign:"left", width:"35%", left:"10%", top:"15%", color:"black"}}>
         <Typography variant="h4" className={classes.carasoulHeading}>
             Exclusive Furneture Made only for you
         </Typography>
         <Typography style={{margin:"20px 0 20px 0"}}>
             Make your House a Home with our wide collection of bueautiful Collection 
         </Typography>
         <Button color="primary" variant="contained">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="First slide"
            style={{height:"50vh"}}
          />
          <Carousel.Caption style={{textAlign:"left", width:"35%", left:"10%", top:"15%", color:"black"}}>
         <Typography variant="h4" className={classes.carasoulHeading}>
             Exclusive Furneture Made only for you
         </Typography>
         <Typography style={{margin:"20px 0 20px 0"}}>
             Make your House a Home with our wide collection of bueautiful Collection 
         </Typography>
         <Button color="primary" variant="contained">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="First slide"
            style={{height:"50vh"}}
          />
          <Carousel.Caption style={{textAlign:"left", width:"35%", left:"10%", top:"15%", color:"black"}}>
         <Typography variant="h4" className={classes.carasoulHeading}>
             Exclusive Furneture Made only for you
         </Typography>
         <Typography style={{margin:"20px 0 20px 0"}}>
             Make your House a Home with our wide collection of bueautiful Collection 
         </Typography>
         <Button color="primary" variant="contained">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
  }
  
export default ControlledCarousel;