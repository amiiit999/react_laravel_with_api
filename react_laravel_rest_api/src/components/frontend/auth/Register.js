import React from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

import { store } from "react-notifications-component";
import Navbar from "../../../layouts/frontend/Navbar";
// Login...


function Register() {
    let navigate = useNavigate();
    const onSubmit = data => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/register', data)

                .then(res => {

                    if (res.data.status === 200) {
                        localStorage.setItem('auth_token', res.data.token);
                        localStorage.setItem('auth_name', res.data.username);
                        navigate('/login');
                        store.addNotification({
                            title: "Success!",
                            message: "Registered Successfully",
                            type: "success",
                            insert: "top",
                            container: "top-right",
                            animationIn: ["animated", "fadeIn"],
                            animationOut: ["animated", "fadeOut"],
                            dismiss: {
                                duration: 3000,
                                onScreen: false
                            }
                        });
                    }

                    if (res.data.status === 422) {

                        reset({ name: res.data.name, password: res.data.password, confirm_password: res.data.confirm_password });
                        store.addNotification({

                            title: "Failed!",
                            message: res.data.message.email[0],
                            type: "danger",
                            insert: "top",
                            container: "top-right",
                            animationIn: ["animated", "fadeIn"],
                            animationOut: ["animated", "fadeOut"],
                            dismiss: {
                                duration: 3000,
                                onScreen: false
                            }
                        });

                    }

                })
                .catch(err => console.log(err));
        });
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Fullname is required'),
        // username: Yup.string()
        //     .required('Username is required')
        //     .min(6, 'Username must be at least 6 characters')
        //     .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirm_password: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        // acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });


    return (
        <div>
            <Navbar />

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card rounded-0">
                            <div className="card-header bg-secondary text-white rounded-0">
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)} method="POST">
                                    <div className="form-group mb-3">
                                        <label>Full Name:</label>
                                        <input type="text" name="name" {...register('name')} className={`form-control rounded-0 ${errors.name ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.name?.message}</div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Email:</label>
                                        <input type="email" name="email" {...register('email')} className={`form-control rounded-0 ${errors.email ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.email?.message}</div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Password:</label>
                                        <input type="password" name="password" {...register('password')} className={`form-control rounded-0 ${errors.password ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.password?.message}</div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Confirm Password:</label>
                                        <input type="password" name="confirm_password" {...register('confirm_password')} className={`form-control rounded-0 ${errors.confirm_password ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.confirm_password?.message}</div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary rounded-0">Register</button>
                                        {/* <button type="button" onClick={reset} className="btn btn-warning float-right ms-2">Reset</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;