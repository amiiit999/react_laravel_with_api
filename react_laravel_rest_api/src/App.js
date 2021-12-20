import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';

import '../src/assets/admin/css/styles.css'
//  import './assets/layouts/js/main';
//  import './assets/layouts/js/jquery.min.js';

// import MasterLayout from './layouts/frontend/MasterLayout';
import Home from './components/frontend/Home';
import Dashboard from './components/admin/dashboard';
import Profile from './components/admin/profile';

import Register from './components/frontend/auth/Register';
import Login from './components/frontend/auth/Login';



axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});



function App() {
  console.log("url", localStorage.getItem('auth_token'));
  return (

    
    <div className="App">
      <Router>
        
          <Routes>
          

            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* <PrivateRoute isAuth={true} path="/" component={GameComponent}  redirectTo='/login'/> */}

            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/profile" element={<Profile />} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
