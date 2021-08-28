import aboutUsImage from './Assets/aboutUsImage.jpg'
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme=>({
    heading:{
        fontWeight:"bold",
        marginTop:"20px",
        marginBottom:"7px",
        fontSize:"23px",
    },
   myContainer:{
    backgroundImage:`url(${aboutUsImage})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    [theme.breakpoints.down("md")]:{
        backgroundImage:"none",
    },
   },
    root:{
        width:"70vw",
        padding:"20px 80px 30px 80px",
        
        [theme.breakpoints.down("sm")]:{
            padding:"20px 20px 20px 20px",
        },
        [theme.breakpoints.down("md")]:{
            width:"95vw",
            margin:"auto",
            marginTop:"40px",
        },
        textAlign:"justify",
        marginTop:"90px",
        marginBottom:"20px",
    },
    topMargin:{
        marginTop: "65px",
    }

}))
export default useStyle;