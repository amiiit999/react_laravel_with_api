import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { store } from "react-notifications-component";

function Navbar() {
    let navigate = useNavigate();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/logout').then(res => {
            if(res.data.status === 200){
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                navigate('/');
                        store.addNotification({
                            title: "Success!",
                            message: res.data.message,
                            type: "success",
                            insert: "top",
                            container: "top-right",
                            animationIn: ["animated", "fadeIn"],
                            animationOut: ["animated", "fadeOut"],
                            dismiss: {
                                duration: 2000,
                                onScreen: false
                            }
                        });
            }
        });
    }

    var AuthButtons = '';

    if(!localStorage.getItem('auth_token')){
        AuthButtons = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                    
                </li>

            </ul>
        )
    }
    else{
        AuthButtons = (
            
            <li className="nav-item">
               <button type="button" onClick={logoutSubmit} className="nav-link btn btn-dark btn-sm text-white">Logout</button>
               
            </li>
            
          
        );
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/"><strong>Navbar</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0e">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
                <Link className="nav-link active" to="/admin/dashboard">Users</Link>  
            </li>
        {AuthButtons}
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;