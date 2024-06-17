import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './components/pages/Home';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup.jsx";
import MyOrders from "./components/pages/MyOrders.jsx";
import ContextReducer from "./components/ContextReducer.jsx";

function App() {
  return (
    <ContextReducer>
       <Router>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/login" element = {<Login/>}/>
        <Route exact path = "/signup" element ={<Signup/>}/>
        <Route exact path="/myorders" element={<MyOrders/>}/>
      </Routes>
     </Router>
    </ContextReducer>
    
   
  );
}

export default App;
