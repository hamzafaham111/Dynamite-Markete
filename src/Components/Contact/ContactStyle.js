import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
    form:{
        fontWeight:"bold",
    },
    input:{
        width:"100%",
        padding:"10px",
        borderRadius:"5px",
        border:"none",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 0px, rgba(0, 0, 0, 0.2) 0px 0px 1px 0px",
        outline:"none",
        marginTop:"8px",
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
        }
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
    }
}))
export default useStyle;