
import { makeStyles } from "@material-ui/core";
import Image from './Assets/upFooter.jpg';
const useStyle = makeStyles(theme=>({
    upFooter:{
        backgroundImage: `url(${Image}),linear-gradient(rgba(0,0,0,5.5),rgba(0,0,0,0.5))`,
        backgroundBlendMode: "overlay",
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        color:"white",
        alignItems:"center",
        justifyContent:"center",
    },
    upFooterText:{
        width:"60%", 
        fontSize:"50px", 
        lineHeight:"120%",
        [theme.breakpoints.down("md")]:{
            fontSize:"40px",
            width:"90%", 
        },
    },

}))
export default useStyle;