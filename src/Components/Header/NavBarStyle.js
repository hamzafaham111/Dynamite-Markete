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
      color:"black",
      "&:hover":{color:"black",},
    },
    title: {
      flexGrow: 1,
    },
    logo:{
        width:"200px",  
        height:"100px",
        objectFit:"cover",   
    }
  }));
  export default useStyles;