import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme=>({
    productBackground:{
        marginTop:"30px",
        width:"95%",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 6px -1px, rgba(0, 0, 0, 0.06) 0px 1px 2px -1px",
        margin:"auto",
        paddingBottom:"40px",
    },
    ourProducts:{
        
    },
    root: {
      maxWidth: 345,
      marginTop:"30px",
      margin:"20px",
      border:"none",
      textDecoration:"none",
      boxShadow:"none",
      [theme.breakpoints.down("xs")]:{
        margin: "auto", 
        marginTop:"10px",
        marginBottom:"10px",
      },
       boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 6px -1px, rgba(0, 0, 0, 0.06) 0px 1px 2px -1px",

      '&:hover': {
          transform: 'translateY(-5px) !important',
          marginTop:"25px",
          transition:"0.3s",
         backgroundColor:"white!important"
      },
    },
    topHeading:{
        textAlign:"center",
        width:"100%",
        marginTop:"20px",
        fontWeight:"bold",
        [theme.breakpoints.down("xs")]:{
            margin: "auto", 
            marginTop:"20px",
            marginBottom:"20px",
          },
    },
    effects:{
        border:"none",
    },
    link:{
        textDecoration:"none",
    },
    name:{
        fontWeight:"bold",
        color:"gray",
    },
    priceBtnTogather:{
    display:"flex",
    flexDirection:"row"
    },
    addIconBtn:{
        border:"solid #C2C2C2 1px", 
        padding:"2px 7px 3px 7px", 
        borderRadius:"5px",
    },
    price:{fontWeight:"600", flex:1},
    addIcon:{
        fontSize:"15px",
    }
  }))
  export default useStyle;