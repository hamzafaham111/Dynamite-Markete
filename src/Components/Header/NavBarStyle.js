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
      color:"#6F599E",
      "&:hover":{color:"black",},
    },
    title: {
      flexGrow: 1,
    },
    icon:{
      color:"#6F599E",
    },
    logo:{
        width:"200px",  
        height:"100px",
        objectFit:"cover", 
        [theme.breakpoints.down("sm")]:{
          width:"150px",  
          height:"80px",
        }  
    },
    addToCardDropdown:{
  display:"flex",
  flexDirection:"column",
  display:"none",
  "&:hover":{
    display:"block"
  },
  },
  }));
  export default useStyles;