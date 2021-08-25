import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme=>({
    heading:{
        fontWeight:"bold",
        marginTop:"20px",
        marginBottom:"7px",
    },
    heading2:{
        
        fontWeight:"bold",
        marginBottom:"15px",
    },
    heading3:{
  
        fontWeight:"bold",
        marginBottom:"15px",
    },
    root:{
        width:"94vw",
        padding:"20px 80px 30px 80px",
        [theme.breakpoints.down("sm")]:{
            padding:"20px 20px 20px 20px",
        },
        margin:"auto",
        marginTop:"40px",
        textAlign:"justify",
    }
}))
export default useStyle;