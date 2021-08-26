import NavBar from './Components/Header/NavBar';
import OurProducts from './Components/Services/Products';
import { Detail } from './Components/Services/Details/Detail';
import Contact from './Components/Contact/Contact';
import Carasul from './Components/CarasolBar/BigCarasul';
import Cart from './Components/Cart/Cart';
import WhatIsDynamite from './Components/WhatIsDyNAMITE/WhatIsDynamite';
import WhatIsDynamite2 from './Components/WhatIsDyNAMITE/index';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Registration/Login';
import Home from './Components/Home/Home';
import ForgetPassword from './Components/Registration/ForgetPassword';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/footer/Footer';


const App = () => {
  return (
   <>
   <div className="app">  
   <Router>
   <NavBar/>
    <Switch>
    <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/about us"><WhatIsDynamite2/></Route>
    <Route path="/detail"><Detail/></Route>
    <Route path="/cart"><Cart/></Route>
    <Route path="/place order"><PlaceOrder/></Route>
    <Route path="/login"><Login/></Route>
    <Route path="/forget password"><ForgetPassword/></Route>
    </Switch>
    <Footer/>
    </Router>
   </div>
   </> 
  )
}

export default App;
