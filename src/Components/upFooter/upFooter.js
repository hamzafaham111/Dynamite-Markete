import React from 'react'
import useStyle from './upFooterStyle';
export const UpFooter = () => {
    const classes = useStyle();
    return (
        <div>
            <div className={classes.upFooter}> 
           <div className={classes.upFooterText}> <p style={{textAlign:"center", fontWeight:"bold", opacity:"80%"}}>Dynimite Market is your one stop marketplace for all your Gadget items.</p></div>
            <p style={{ opacity:"80%", fontSize:"20px", textAlign:"center"}}>We are an online store where you can conveniently purchase all your premium gadgets.</p>
            </div>
        </div>
    )
}
