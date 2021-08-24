import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles({
    productBackground:{
        marginTop:"30px",
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
    },
    effects:{
        border:"none",
    },
    link:{
        textDecoration:"none",
    },
    price:{
        fontWeight:"bold",
    },
  })
  export default useStyle;