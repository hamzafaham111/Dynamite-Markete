import NavBar from './Components/Header/NavBar';
import { Detail } from './Components/Services/Details/Detail';
import Cart from './Components/Cart/Cart';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Registration/Login';
import Home from './Components/Home/Home';
import ForgetPassword from './Components/Registration/ForgetPassword';
import BestSellingProducts  from './Components/Services/Best selling products/BestSellingProducts';
import Contact from './Components/Contact/Contact';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/footer/Footer';
import WhatIsDynamite from './Components/WhatIsDyNAMITE/WhatIsDynamite';


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
    <Route path="/contact us"><Contact/></Route>
    <Route path="/about us"><WhatIsDynamite/></Route>
    <Route path="/cart"><Cart/></Route>
    <Route path="/detail"><Detail/></Route>
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
