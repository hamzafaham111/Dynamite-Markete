import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolBar:{
display:"flex",
    },
    link:{
      textDecoration:"none",
      color:"black"
    },
    title: {
      flexGrow: 1,
    },
    logo:{
        width:"200px",  
        height:"100px"    
    }
  }));
  export default useStyles;