import { p } from '@material-ui/core'
import React from 'react'
import useStyle from './Style';
const WhatIsDynamite = () => {
            const classes = useStyle();
    return (
        <div className={classes.myContainer}>
           <div className={classes.root}>
            <p className={classes.heading}>
            Dynamite Market
            <div className={classes.headingUnderLine}></div>
            </p>
            <p style={{fontWeight:"600"}}>
                Dynamite Market is one of the best and top-rated stores on Amazon. Dynamite Market is an online
                retailer of Hp toner cartridges dedicated to excellence. We provide Hp toner cartridges to our valuable clients.
                Dynamite Market has maximized brand value in the market. We are zealous and enthusiastic about each products that we sell.
                Our product go through in powerful quality tests and provide extensive after-service to further heighten the
                ability of resellers to grow our brand image. 

            </p>
            <p className={classes.heading}>
            Mission
            </p>
            <p style={{fontWeight:"600"}}>
            Dynamite Market's mission is to become the top-notch online retailer and distributor in the market worldwide. 
            Our mission is formed by our dedication to the highest quality standards that shape our preferences, drive our pledges, 
            and motivate our organizational decisions. Our name is a vital asset, and our company's values guide our behaviors, 
            results, and how we achieve our goal. 
            </p>
             <p className={classes.heading}>
             Vision
            </p>
            <p style={{fontWeight:"600"}}>
            We acknowledge progress—that the utilization of dedication, motivation, and trust can develop business, and the brand position.
            Dynamite Market's Vision is to lead in the communication, Sell, and deliver the industry’s most trustworthy products. Our Online network 
            interprets best possible way into business value for our valuable clients.
            </p>
            <div className={classes.heading}>
            Our Values
            </div>
            <p style={{fontWeight:"600"}}>
            <ul>
                <li>Dedication to every client's order.</li>
                <li>Trust that matters—for our company and our clients.</li>
                <li>Reliance and personal honesty in all dealings.</li>
            </ul>
            </p>
           </div>
        </div>
    )
}
export default WhatIsDynamite;
