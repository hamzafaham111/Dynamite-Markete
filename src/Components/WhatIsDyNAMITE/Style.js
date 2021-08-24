import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme=>({
    heading:{
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:"20px",
    },
    root:{
        width:"70vw",
        [theme.breakpoints.down("sm")]:{
            width:"85%",
        },
        margin:"auto",
        marginTop:"40px",
        textAlign:"justify"
    }
}))
export default useStyle;