import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

import { store } from "react-notifications-component";
import Navbar from "../../../layouts/frontend/Navbar";
// import { store } from "react-notifications-component";
// import Navbar from "../../../layouts/frontend/Navbar";

const AddUsers = (props) => {
    const [users, setUsers] = useState({});
    let isRendered = useRef(false);
  

    let navigate = useNavigate();
    const onSubmit = data => {
      console.log("test props",data)
      const formData = new FormData();

      formData.append("image",data.image[0])
      formData.append("data",data)
      console.log("test props1",formData.get('image'))
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/add_users_info/${props.user.id}`, {
              method: "POST",
              body: {formData,data}
            })

                .then(res => {
                  console.log("test props",res.data)
                    if (res.data.status === 200) {
                      
                        localStorage.setItem('auth_token', res.data.token);
                        // localStorage.setItem('auth_name', res.data.username);
                        navigate('/admin/dashboard');
                        store.addNotification({
                            title: "Success!",
                            message: "User Information Added Successfully !!",
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

                   

                })
                .catch(err => console.log(err));
        });
    };
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "too short")
        .max(10, "too long"),
        // name: Yup.string().required('Fullname is required'),
        // username: Yup.string()
        //     .required('Username is required')
        //     .min(6, 'Username must be at least 6 characters')
        //     .max(20, 'Username must not exceed 20 characters'),
        image: Yup.mixed()
        .test(
          "numberOfFiles",
          "Image field is required",
          (value) => {
            if (value.length > 0) return true;
            return false;
          }
        ).test("fileSize", "error information", (value) => {
            if (value.length > 0) return value[0].size <= 5242880;
            return false;
          }).test(
            "fileType",
            "error information",
            (value) => {
              if (value.length === 0) return false;
              for (var i = 0; i < value.length; i++) {
                if (
                  !["image/jpeg", "image/png", "image/jpg"].includes(value[i].type)
                )
                  return false;
              }
              return true;
            }
          ),

        // email: Yup.string()
        //     .required('Email is required')
        //     .email('Email is invalid'),

        doj: Yup.string().required('DOJ field is required'),

        document: Yup.mixed()
        .test(
          "numberOfFiles",
          "CV field is required",
          (value) => {
            if (value.length > 0) return true;
            return false;
          }
        ).test("fileSize", "Size Error", (value) => {
            if (value.length > 0) return value[0].size <= 5242880;
            return false;
          }).test(
            "fileType",
            "Invalid File Format",
            (value) => {
              if (value.length === 0) return false;
              for (var i = 0; i < value.length; i++) {
                if (
                  !["application/pdf", "application/doc","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.oasis.opendocument.text"].includes(value[i].type)
                )
                  return false;
              }
              return true;
            }
          ),
        
        gender: Yup.string()
            .required('Gender field is required'),
        
        about: Yup.string()
        .required('About field is required'),
        // password: Yup.string()
        //     .required('Password is required')
        //     .min(8, 'Password must be at least 8 characters')
        //     .max(40, 'Password must not exceed 40 characters'),
        // confirm_password: Yup.string()
        //     .required('Confirm Password is required')
        //     .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        // acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });

    

    return (


                                <div className="container">
                                  <form onSubmit={handleSubmit(onSubmit)} method="POST" >
                                    <div className="form-group mb-3">
                                        <label>Phone Number :</label>
                                        <input type="text" name="phoneNumber" {...register('phoneNumber')} className={`form-control rounded-0 ${errors.phoneNumber ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>DOJ :</label>
                                        <input type="date" name="doj" {...register('doj')} className={`form-control rounded-0 ${errors.doj ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.doj?.message}</div>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <label>Image:</label>
                                        <input type="file" id="files"  name="image" {...register('image')} className={`form-control rounded-0 ${errors.image ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.image?.message}</div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>CV :</label>
                                        <input type="file" name="document" {...register('document')} className={`form-control rounded-0 ${errors.document ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.document?.message}</div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Gender :</label>
                                        <select type="text" name="gender" {...register('gender')} className={`form-control select rounded-0 ${errors.gender ? 'is-invalid' : ''}`}>
                                            <option value="">Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        <div className="invalid-feedback">{errors.gender?.message}</div>
                                    </div>

                                <div className="form-group mb-3">
                                        <label>About :</label>
                                        <textarea type="text" name="about" {...register('about')} className={`form-control rounded-0 ${errors.about ? 'is-invalid' : ''}`} placeholder="About" />
                                        <div className="invalid-feedback">{errors.about?.message}</div>
                                    </div>
                                    {/* <div className="form-group mb-3">
                                        <label>Password:</label>
                                        <input type="password" name="password" {...register('password')} className={`form-control rounded-0 ${errors.password ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.password?.message}</div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Confirm Password:</label>
                                        <input type="password" name="confirm_password" {...register('confirm_password')} className={`form-control rounded-0 ${errors.confirm_password ? 'is-invalid' : ''}`} />
                                        <div className="invalid-feedback">{errors.confirm_password?.message}</div>
                                    </div> */}
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary rounded-0">Submit</button>
                                        {/* <button type="button" onClick={reset} className="btn btn-warning float-right ms-2">Reset</button> */}
                                    </div>
                                </form>
                                </div>
                            
    )
}

export default AddUsers;