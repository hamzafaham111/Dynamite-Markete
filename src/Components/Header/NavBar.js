import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from './Assets/DYNANITE-MARKET.png';
import { Link } from 'react-router-dom';
import useStyles from './NavBarStyle';

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
           <Link to="/"> <img className={classes.logo}src={Logo} alt="logo"/></Link>
          </Typography>
         <Link to="/login" style={{textDecoration:"none", color:"#6F599E"}}><span style={{fontWeight:"bold", marginRight:"15px",cursor:"pointer",}}>Login</span></Link>
          <Link to="/cart" className={classes.link}>
          <ShoppingCartIcon className={classes.icon}/><b style={{color:"#6F599E"}}>({0})</b>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
