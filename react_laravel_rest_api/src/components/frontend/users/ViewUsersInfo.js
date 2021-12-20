
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Modal } from 'react-bootstrap';

import AddUsers from "./AddUsers";
// import { Link } from 'react-router-dom';
const ViewUsers = () => {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState('initial');

    const [show, setShow] = useState(false);
    const handleShow = (item) => {
        setShow(true);
        sethandleUser(item)
    }
    const handleClose = () => {
        setShow(false);
        sethandleUser(null)
    }

    const [handleUser, sethandleUser] = useState(null);
    let isRendered = useRef(false);
    useEffect(() => {
        isRendered = true;
        axios
            .get('/api/view-users')
            .then(res => {
                if (isRendered && res.data.status === 200) {

                    setUsers(res.data.users);
                    setLoading(false);
                }
                return null;
            })
            .catch(err => console.log(err));
        return () => {
            isRendered = false;
        };
    }, [setUsers,setLoading]);
    // useEffect(() => {
    //     axios.get('/api/view-users').then(res=> {
    //         //  console.log("test data",res.data.users);
    //         if(res.data.status === 200){
    //             setUsers(res.data.users);
    //         }
    //         setLoading(false);
    //     });

    // },[]);

    var viewUsersList_HTMLTABLE = "";
    if (loading) {
        return <h4>Loading Users...</h4>
    }
    else {
        viewUsersList_HTMLTABLE =
            users.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                            <button variant="primary" className="btn btn-primary btn-sm" onClick={() => handleShow(item)} data-backdrop="false"> Add Info</button>
                        </td>
                        <td>
                            <Link to={`edit_user/${item.id}`} className="btn btn-success btn-sm"> Edit
                            </Link>
                        </td>
                        <td><button type="button" className="btn btn-danger btn-sm">Delete
                        </button></td>

                        <Modal show={show} onHide={handleClose} className="rounded-0 modal fade">
                            <Modal.Header closeButton>
                                <Modal.Title>Add Information for  {handleUser?.name}</Modal.Title>

                            </Modal.Header>
                            <Modal.Body>
                                <AddUsers user={handleUser} />

                            </Modal.Body>
                        </Modal>
                    </tr>
                )
            });
    }
    return (

        <div className="container py-4">

            <div className="card mt-4">
                <div className="card-header">
                    <h4>Users List</h4>


                </div>

                <div className="card-body">
                    <table className="table table-bordered table-triped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Add Info</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {viewUsersList_HTMLTABLE}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>


    );
}

export default ViewUsers;