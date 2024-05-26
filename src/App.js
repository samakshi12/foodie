import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './components/pages/Home';
import Login from "./components/pages/Login";

function App() {
  return (
     <Router>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/login" element = {<Login/>}/>
      </Routes>
     </Router>
   
  );
}

export default App;
