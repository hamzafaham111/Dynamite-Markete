import React from 'react'
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import useStyle from './ContactStyle';
import RightSide from './RightSide'
const Contact = () => {
    const classes = useStyle();
    return (
        <div>
            <Container className={classes.outerContainer}>
                <form>
                <Grid container>
                <Grid container item xs={12} md={8} spacing="2">
                <Grid>
                <Typography variant="h5" className={classes.topHeading}>
                   Questions, Comments, or Concerns?
                   </Typography>
                   </Grid>
                    <Grid className={classes.formFont} item xs= {12} md={6}>
                        <label>Your Name (required)</label>
                        <input className={classes.input} type = "text"/>
                    </Grid>
                    <Grid className={classes.formFont} item xs= {12} md={6}>
                        <label>Your Email (required)</label>
                    <input className={classes.input} type = "text"/>
                    </Grid>
                    <Grid className={classes.formFont} item xs= {12}>
                        <label>Subject</label>
                    <input className={classes.input} type = "text" />
                    </Grid>
                    <Grid className={classes.formFont} item xs= {12}>
                        <label>Your Messege</label>
                    <textarea rows="12" className={classes.input} type = "text" />
                    </Grid>
                    <Grid className={classes.formFont} item xs={12}>
                    <Button className={classes.btnStyle} variant="contained" type="submit">Send</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={4} >
                    <div className={classes.outSide} >
                    <RightSide/>     
                    </div>                   
                </Grid>
                </Grid>
                </form>
            </Container>
        </div>
    )
}
export default Contact;
