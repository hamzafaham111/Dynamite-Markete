import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme=>({
carasoul:{
    marginTop:"130px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 6px -1px, rgba(0, 0, 0, 0.06) 0px 1px 2px -1px",
    width:"95%",
    margin:"auto",
},
carouselCaption:{
    textAlign:"left", 
    width:"35%", 
    left:"4%", 
    top:"13%", 
    color:"black",
},
carasoulHeading:{
    fontSize:"25px",
    lineHeight:"100%",
    fontWeight:"600",
    [theme.breakpoints.down("md")]:{
        fontSize:"20px",
    }
},
carasoulParagraph:{
    fontSize:"15px",
    margin:"10px 0 20px 0"
},
carouselBtn:{
    background:"black",
    fontSize:"bold",
}
}))
export default useStyle;