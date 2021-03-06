import { makeStyles } from "@material-ui/core";
import FirstImage from './Assets/bannerImage.jpg';

const useStyle = makeStyles(theme=>({
banner:{
    marginTop:"130px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 6px -1px, rgba(0, 0, 0, 0.06) 0px 1px 2px -1px",
    width:"95%",
    margin:"auto",
    backgroundImage:"none",
    [theme.breakpoints.up("sm")]:{
        backgroundImage:`url(${FirstImage})`,
        height:"70vh",
    },
    backgroundSize:"100% 100%",
    backgroundPosition:"center",
    backgroundRepeat:"none",
},
bannerHeading:{
    fontWeight:"600",
    lineHeight:"100%",
    fontSize:"25px",
    [theme.breakpoints.down("sm")]:{
        fontSize:"20px",
    },
    marginBottom:"10px",
},
bannerCaption:{
    width:"70%",
    [theme.breakpoints.down("sm")]:{
        width:"100%",
    },
    [theme.breakpoints.up("sm")]:{
     display:"none",
    },
    marginTop:"30px",
    marginLeft:"40px",
},
bannerParagraph:{
fontSize:"15px",
lineHeight:"110%",
},
bannerBtn:{
    border:"none",
    background:"black",
    color:"white",
    padding:"6px 15px 6px 15px",
    marginTop:"20px",
    marginBottom:"20px",
    borderRadius:"4px",
}
}))
export default useStyle;