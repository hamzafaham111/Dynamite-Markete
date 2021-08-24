import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    outerContainer:{
        marginTop:"100px",
        marginBottom:"20px",
    },
    detailContentBackground:{
        
    },
    imageSide:{
        width:"100%", 
        height:"80vh"
    },
    firstHeading:{
    marginTop:"25px",
    fontWeight:"bold",
},
price:{
margin:"20px 0 0 0",
fontWeight:"bold",
fontSize:"20px",
},
paragraph:{
    margin:"10px 0px 20px 0",
},
instenceTimeChanges:{
    display:"flex",
},
btn:{
    height:"100%",
    padding:"0px 10px 0px 10px",
    fontSize:"20px",
    fontWeight:"600",
    "&:hover":{
        cursor: "pointer",
    },
    backgroundColor:"#F9F9F9",
    
},
input:{
    textAlign:"center",
    border:"none",
    width:"50px",
    padding:"5px",
    fontSize:"20px",
    fontWeight:"600",
    background: "transparent",
},
bottonBorder:{
    border:"solid #AAAAAA 1px",
},
button:{
    marginLeft:"10px",
}
})
export default useStyle;