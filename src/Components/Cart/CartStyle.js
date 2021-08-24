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
    topTags:{
        padding:"10px 0 10px 0",
        color:"#BEBEBE",
        borderBottom:"solid #DFDFDF 1px",
        marginTop:"80px",
        [theme.breakpoints.down("md")]:{
            display:"none",
        }
    },
    cartProduct:{
        padding:"30px 0 30px 0",
        borderBottom:"solid #DFDFDF 1px",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        [theme.breakpoints.down("md")]:{
           margin:"Auto",
            marginTop:"10px",
            padding:"20px 0 20px 0",
            border:"solid #DFDFDF 1px",
        }      
    },
    productImage:{
        width:"40px",
        height:"40px",
        marginRight:"20px",
        [theme.breakpoints.down("md")]:{
            margin:"Auto",
             marginTop:"20px",
         }    
    },
    remove:{
        color:"#C0C0C0",
        "&:hover":{
            color:"black",
            cursor:"pointer",
        },
    },
    btn:{
        height:"100%",
        padding:"0 10px 0 10px",
        color:"gray",
        "&:hover":{
            cursor: "pointer",
        },
    },
    gridContent:{
        textAlign:"center",
        [theme.breakpoints.down("md")]:{
            marginTop:"15px",
         } ,
    },
    imageGrid:{
        [theme.breakpoints.down("md")]:{
            marginTop:"10px",
            display:"flex",
            flexDirection:"column",
            width:"100%",
            alignItems:"center",
         } 
    },
    QuantityBtn:{
        border:"solid #DFDFDF 1px",
        padding:"10px",
    },
    input:{
        textAlign:"center",
        border:"none",
        outline:"none",
        width:"50px",
        padding:"0 10px 0 10px",
        color:"gray",
    },
    firstHeadingRS:{
        borderBottom:"solid #979797 1px",
        width:"100%",
        textAlign:"left",
        padding:"15px 0 10px 0",
    },
    rightSide:{
        background:"#F9F9F9",
        padding:"20px",
        marginTop:"80px",
        border:"solid #B4B4B4 1px",
        borderStyle: "dotted",
        borderRadius:"4px",
        margin:"auto",
    },
    subTotal:{
        flex:1,
        textAlign:"left",
    },
    subTotalGrid:{
        borderBottom:"solid #D3D3D3 1px ",
        padding:"20px 0 20px 0",
        marginBottom:"20px",
    },
    totalGrid:{
        padding:"20px 0 20px 0",
        marginBottom:"20px",
        borderTop:"solid #D3D3D3 1px",
        marginTop:"20px",
    },
    btnRS:{
        border:"solid gray 1px",
        margin:"auto",
        borderRadius:"none",
        width:"100%",
        "&:hover":{
            color:"white",
            background:"black",
        },
    },
    continueShopingBtn:{
        border:"solid #D3D3D3 1px",
        color:"#AEAEAE",
        margin:"auto",
        borderRadius:"none",
        marginTop:"30px",
        width:"100%",
        "&:hover":{
            color:"white",
            background:"black",
        },
    },
    flex:{
     
    },
}))
export default useStyle;