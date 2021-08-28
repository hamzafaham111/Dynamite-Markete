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
        color:"#6F599E",
    },
    priceBtnTogather:{
    display:"flex",
    flexDirection:"row"
    },
    addCartButton:{
        backgroundColor:"transparent",
        border:"none",
        border:"solid #1CAD59 1px",
        color:"#1CAD59",
        padding:"1px 5px 1px 5px",
        borderRadius:"4px",
        fontSize:"15px",
       "&:hover":{
        backgroundColor:"green",
       },
    },
    price:{fontWeight:"600", flex:1,color:"#6F599E"},
    addIcon:{
        fontSize:"15px",
    }
  }))
  export default useStyle;