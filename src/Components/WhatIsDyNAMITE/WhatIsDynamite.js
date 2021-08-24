import { Typography } from '@material-ui/core'
import React from 'react'
import useStyle from './Style';
const WhatIsDynamite = () => {
            const classes = useStyle();
    return (
        <div>
           <div className={classes.root}>
           <Typography variant="h4" className={classes.heading}>
            Dynamite Market
            </Typography>
            <Typography>
                Dynamite Market is one of the best and top-rated stores on Amazon. Dynamite Market is an online
                retailer of Hp toner cartridges dedicated to excellence. We provide Hp toner cartridges to our valuable clients.
                Dynamite Market has maximized brand value in the market. We are zealous and enthusiastic about each products that we sell.
                Our product go through in powerful quality tests and provide extensive after-service to further heighten the
                ability of resellers to grow our brand image. 

            </Typography>
           </div>
        </div>
    )
}
export default WhatIsDynamite;
