import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import 'animate.css';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from './pages/Cart';
import { useCart } from './ContextReducer';
export default function Navbar() {
  
  let data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("authToken");
    navigate("/");
    }

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-success ">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic animate__animated animate__bounceIn " to="/">Foooodie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken")) ? 
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/myorders">My Orders</Link>
        </li>: "" }
        </ul>

        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li> */}

        {!(localStorage.getItem("authToken"))? 
         
        <div className='d-flex'>
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
          <Link className="btn bg-white text-success mx-1" to="/signup">Sign up</Link>
        </div>
        :
        <div>
        <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
        My Cart{"  "}
        <Badge pill bg="danger">{data.length===0? "": data.length}</Badge>
        </div> 
        {cartView? <Modal onClose={()=> setCartView(false)}><Cart/></Modal>:null}
         <div className='btn bg-white text-success mx-2' onClick={handleLogout}>
        Logout
        </div> 
        </div>
             }
       </div>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
</nav>
</div>
  )}