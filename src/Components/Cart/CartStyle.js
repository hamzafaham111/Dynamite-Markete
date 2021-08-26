import { makeStyles } from "@material-ui/core";
import CartBanner from './banner/CartBanner.jpg';
const useStyle = makeStyles(theme=>({
    cartHeader:{
        height:"40vh",
        marginTop:"15vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        background:"gray",
        backgroundImage:`url(${CartBanner})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
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
        border:"solid #E1E1E1 1px",
        padding:"5px 10px 5px 10px",
        "&:hover":{
            color:"black",
            cursor:"pointer",
            background:"black",
            color:"white",
            fontWeight:"600",
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
        border:"none",
        border:"solid #BCBCBC 1px",
        margin:"auto",
        borderRadius:"none",
        width:"100%",
        padding:"7px",
        fontWeight:"500",
        borderRadius:"3px",
        "&:hover":{
            color:"white",
            background:"black",
            transition:"0.5s",
        },
    },
    continueShopingBtn:{
        border:"solid #D3D3D3 1px",
        color:"#AEAEAE",
        margin:"auto",
        borderRadius:"none",
        marginTop:"30px",
        width:"100%",
        fontWeight:"600",
        "&:hover":{
            color:"white",
            background:"black",
        },
    },
    flex:{
     
    },
}))
export default useStyle;