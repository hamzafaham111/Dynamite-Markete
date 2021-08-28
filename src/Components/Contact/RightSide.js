import { Typography } from '@material-ui/core'
import React from 'react'
import useStyle from './ContactStyle'
import { Button } from '@material-ui/core'
// import { Container } from '@material-ui/core'
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import TwitterIcon from '@material-ui/icons/Twitter';
const RightSide = () => {
    const classes = useStyle();
    return (
        <div className={classes.height}>
            <div className={classes.rightSideMainDiv}>
               <div className={classes.rightSideElements}>
               <Typography className={classes.textBold}>
                Address:
                </Typography>
                <Typography className={classes.fontSize}>
                <p><b>UK:</b> 71 - 75 Shelton street, convent Garden, London, England, WC2H 9JQ</p>
                <p><b>USA:</b> PO Box 18943</p>
                </Typography>
               </div>
               <div className={classes.rightSideElements}>
               <Typography className={classes.textBold}>
                Phone:
                </Typography>
                <span style={{flex:"1"}} className={classes.fontSize}>
                <b>USA: </b>+16503149135
                </span>
               <div  style={{display:"flex", flexDirection:"row"}}>
                <span style={{flex:"1"}} className={classes.fontSize}>
                <b>Uk: </b>+447398015004
                </span>
               </div>
               </div>

               <div className={classes.rightSideElements}>
               <Typography className={classes.textBold}>
                Email:
                </Typography>
                <span style={{flex:"1"}} className={classes.fontSize}>
                sales@hptonersupply.com
                </span>
               <div  style={{display:"flex", flexDirection:"row"}}>
                <span style={{flex:"1"}} className={classes.fontSize}>
                Infor@hptonersupply.com
                </span>
               </div>
               </div>
               {/* <div>
                   <Typography className={classes.textBold2}>Follow Us:</Typography>
                   <span className={classes.icon}><FacebookIcon className={classes.iconSize}/></span>
                   <span className={classes.icon}><InstagramIcon className={classes.iconSize}/></span>
                   <span className={classes.icon}><TwitterIcon className={classes.iconSize}/></span>
                   <span className={classes.icon}><YouTubeIcon className={classes.iconSize}/></span>
               </div> */}
            </div>
        </div>
    )
}
export default RightSide;
