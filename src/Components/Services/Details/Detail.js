import React from 'react'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import Image from './Assets/Image1.jpg'
import { Typography } from '@material-ui/core'
import useStyle from './DetailStyle'
import { Button } from '@material-ui/core'
export const Detail = () => {

    const classes = useStyle();
    return (

        <div>
            <Container className={classes.outerContainer}>
                <Grid container>
                    <Grid item xs={6}>
                        <Container>
                            <div>
                                <img className={classes.imageSide} src={Image} />
                            </div>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.detailContentBackground}>
                        <Typography variant="h5" className={classes.firstHeading}>
                        Original HP 305A CE410A / CE411A / CE412A / CE413A 4 Toner Cartridges | Black, Cyan, Magenta, Yellow for HP Laserjet Pro M451/M475
                        </Typography>
                        <Typography className={classes.price}>
                        Feature:
                        </Typography>
                        <Typography className={classes.paragraph}>
                        <p>
                        Original HP 305A toner cartridges work with: HP Color LaserJet Pro M451dn, M451dw, M451nw, MFP M475dn, M475dw, MFP M375nw 
                        Save up to 10% with HP toner multipart.
                        </p> 
                        <p>
                        Hp 305a cartridge yield (approx. ) per cartridge: 2, 090 pages black, 2, 600 pages Cyan, 2, 600 pages Magenta, 2, 600 pages Yellow 
                        Hp toner is Designed to work with your HP printer for High quality, reliable results every Print. 
                        What's in the box: HP 305a toner cartridges (1 black, 1 Cyan, 1 Magenta, 1 Yellow).
                        </p>
                        </Typography>

                        <Typography className={classes.price}>
                        Description : 
                        </Typography>
                        <Typography className={classes.paragraph}>
                        Original HP 305A 4 Toner Cartridge Original CE410A, CE411A, CE412A, CE413A For HP LaserJet Pro 300 color MFP M375nw, 
                        HP LaserJet Pro 400 color M451dn, HP LaserJet Pro 400 color M451dw, HP LaserJet Pro 400 color M451nw, HP LaserJet 
                        Pro 400 color MFP M475dn, HP LaserJet Pro 400 color MFP
                        </Typography>
                        
                        </div>
                        <div className={classes.instenceTimeChanges}>
                           <div className={classes.bottonBorder}>
                           <span className={classes.btn}>+</span><input className={classes.input} type="text" value={0}/><span className={classes.btn}>-</span>
                           </div>
                            <Button variant="contained" color="primary" className={classes.button}>Add To Cart</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
