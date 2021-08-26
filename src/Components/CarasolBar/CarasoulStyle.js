import { makeStyles } from "@material-ui/core";
import bannerImg from './Assets/carasoulImage1.jpg';
const useStyle = makeStyles(theme=>({
banner:{
    marginTop:"130px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 6px -1px, rgba(0, 0, 0, 0.06) 0px 1px 2px -1px",
    width:"95%",
    margin:"auto",
    height:"45vh",
    backgroundImage:"none",
    [theme.breakpoints.up("sm")]:{
        backgroundImage:`url(${bannerImg})`,
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
    marginTop:"30px",
    marginLeft:"40px",
},
bannerParagraph:{
fontSize:"15px",
lineHeight:"100%",
},
bannerBtn:{
    border:"none",
    background:"black",
    color:"white",
    padding:"6px 15px 6px 15px",
    marginTop:"20px",
    borderRadius:"4px",
}
}))
export default useStyle;