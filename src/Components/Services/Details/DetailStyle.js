import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme=>(
    {
        outerContainer:{
            marginTop:"100px",
            marginBottom:"20px",
        },
        detailContentBackground:{
            borderBottom:"solid #AAAAAA 1px",
        },
        imageSide:{
            width:"100%", 
            height:"80vh",
            [theme.breakpoints.down("md")]:{
                height:"60vh",
            },
            objectFit:"fill",
        },
        firstHeading:{
        marginTop:"25px",
        fontWeight:"bold",
    },
    price:{
    margin:"20px 0 0 0",
    fontWeight:"bold",
    fontSize:"20px",
    },
    paragraph:{
        margin:"10px 0px 20px 0",
    },
    instenceTimeChanges:{
        display:"flex",
        marginTop:"20px",
    },
    btn:{
        height:"100%",
        padding:"0px 10px 0px 10px",
        fontSize:"20px",
        fontWeight:"600",
        "&:hover":{
            cursor: "pointer",
        },
        
    },
    input:{
        textAlign:"center",
        border:"none",
        width:"50px",
        padding:"5px",
        fontSize:"20px",
        fontWeight:"600",
        background: "transparent",
    },
    bottonBorder:{
        border:"solid #AAAAAA 1px",
    },
    button:{
        marginLeft:"10px",
        padding:"5px 20px 5px 20px",
        background:"black",
        color:"white",
        fontWeight:"bold",
        border:"none",
    }
    }
))
export default useStyle;