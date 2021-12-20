import React from 'react';
import Navbar from '../../layouts/frontend/Navbar';
import Users from '../frontend/users/ViewUsersInfo';
// import SideNavbar from '../../layouts/admin/Sidebar'

function Dashboard() {
    return (
       <div>
            { <Navbar /> }
            {/* <SideNavbar /> */}
           
        <div className="container">
        <Users />
        </div>
       </div>
    );
}

export default Dashboard;