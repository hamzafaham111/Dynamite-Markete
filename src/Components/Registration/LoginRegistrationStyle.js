import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme=>({
login1:{
    display:"flex",
    flexDirection:"column",
    margin:"auto",
    padding:"30px",
    marginTop:"100px",
},
login2:{
    display:"flex",
    flexDirection:"column",
    margin:"auto",
    padding:"30px",
    marginTop:"100px",
    [theme.breakpoints.down("md")]:{
        marginTop:"0px",
    }
},
container:{
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    padding:"30px",
    borderRadius:"7px",
},
fieldContainer:{
    display:"flex",
    flexDirection:"column",
    marginTop:"10px",
},
label:{
    fontSize:"16px",
    marginBottom:"10px",
},
input:{
    padding:"10px",
    borderRadius:"6px",
    border:"none",
    boxShadow: "rgba(0, 0, 0, 0.09) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    outline:"none",
},
loginBtn:{
width:"100%",
background:"black",
color:"white",
border:"none",
padding:"7px",
borderRadius:"5px",
},


}))
export default useStyle;