import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
    cartHeader:{
        height:"25vh",
        marginTop:"18vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        background:"gray",
    },
    form:{
        fontWeight:"bold",
    },
    input:{
        width:"100%",
        padding:"10px",
        borderRadius:"5px",
        border:"none",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 0px, rgba(0, 0, 0, 0.2) 0px 0px 1px 0px",
        // boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 0px, rgba(0, 0, 0, 0.2) 0px 0px 1px 0px",
        outline:"none",
        marginTop:"15px",
    },
    outerContainer:{
        marginTop:"20px"
    },
    outSide:{
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 0px, rgba(0, 0, 0, 0.2) 0px 0px 1px 0px!important",
        margin:"auto", 
        height:"100%", 
        borderRadius:"10px", 
        width:"100%", 
        padding:"20px", 
        margin:"0 20px 0 20px" ,
        [theme.breakpoints.down("sm")]:{
            marginTop:"20px",
            margin:"0 5px 0 5px" ,
        },

    },
    formFont:{
        fontWeight:"600",
        fontSize:"15px",
        marginTop:"10px",
    },
    btnStyle:{
        background:"black",
        color:"white",
        padding:"10px 25px 10px 25px",
        fontWeight:"bold",
        borderRadius:"7px",
        textTransform: "capitalize",
        [theme.breakpoints.down("sm")]:{
            marginTop:"20px",
        },
        border:"none",
    },
    topHeading:{
        fontWeight:"bold",
        width:"100%",
        margin:"20px 0 20px 0"
    },
    rightSide:{
        marginTop:"9%",
    },
    textBold:{
        fontWeight:"bold",
        fontSize:"15px",
    },
    
    textBold2:{
        fontWeight:"bold",
        fontSize:"15px",
        marginBottom:"20px",
    },
    textBold3:{
        fontWeight:"bold",
        fontSize:"25px",
        marginTop:"20px",
    },
    fontSize:{
        fontSize:"12px",
        marginTop:"10px",
    },
    btnStyle2:{
        fontWeight:"800",
        fontSize:"12px",
    },
    rightSideMainDiv:{
        fontSize:"15px",
        
    },
    rightSideElements:{
        margin:"20px 0 20px 0"
    },
    icon:{
        marginRight:"20px",
    },
    iconSize:{
        fontSize:"17px",
    },
    headingTagsRS:{
        background:"#C7C7C7",
        width:"100%",
    },
    placeOrderRSDetailsElement:{
        padding:"17px", 
        borderBottom:"solid #DDDDDD 1px",
        fontSize:"15px",
    },
    placeOrderRSDetailsElementHead:{
        padding:"17px", 
        borderBottom:"solid #DDDDDD 1px",
        fontSize:"16px",
        background:"#DBDBDB"
    }
}))
export default useStyle;