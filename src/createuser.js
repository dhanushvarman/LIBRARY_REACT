import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { config } from "./config"



function Createuser() {

    const [loading, setloading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            book: "",
            isbn: "",
            dob: "",
            phone: "",
            price: "",
            gender: "",
        },
        validate: (values) => {
            let error = {};

            if (!values.name) {
                error.name = "Please enter a name";
            }
            if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
                error.name = "Name must be between 3 to 15 characters";
            }
            if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
                error.email = "Please enter a email";
            }
            if (values.phone.toString().length != 10) {
                error.phone = "Please enter a valid number";
            }

            return error
        },
        onSubmit: async (values) => {
            try {
                setloading(true)
                await axios.post(`${config.api}/user`, values)
                setloading(false)
                alert("User Created Successfully");
                formik.resetForm()
            } catch (error) {
                console.log(error)
            }
        }
    })

    console.log(formik.values)

    return (
        <div className='container'>
            <Link to={"/portal/users"} className="btn btn-primary mb-3"><i class="fa-solid fa-sm fa-left-long mr-1"></i>BACK</Link>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Name</label>
                            <input name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className={`form-control ${formik.errors.name ? 'error-box' : ''} 
                        ${formik.touched.name && !formik.errors.name ? 'success-box' : ''}`}
                                type={"text"}>

                            </input>
                            {
                                formik.errors.name ? <span style={{ color: "red" }}>{formik.errors.name}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={`form-control ${formik.errors.email ? 'error-box' : ''} 
                        ${formik.touched.email && !formik.errors.email ? 'success-box' : ''}`}
                                type={"text"}>

                            </input>
                            {
                                formik.errors.email ? <span style={{ color: "red" }}>{formik.errors.email}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <div className='form-group'>
                                <label>Book Name</label>
                                <input name="book"
                                    onChange={formik.handleChange}
                                    value={formik.values.book}
                                    className='form-control'
                                    type={"text"}></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <div className='form-group'>
                                <label>Isbn</label>
                                <input name="isbn"
                                    onChange={formik.handleChange}
                                    value={formik.values.isbn}
                                    className='form-control' 
                                    type={"text"}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>Date of Birth</label>
                            <input name="dob"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dob}
                                className={`form-control ${formik.errors.dob ? 'error-box' : ''} 
                        ${formik.touched.dob && !formik.errors.dob ? 'success-box' : ''}`}
                                type={"date"}>
                            </input>
                            {
                                formik.errors.dob ? <span style={{ color: "red" }}>{formik.errors.dob}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>Phone Number</label>
                            <input name="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                className={`form-control ${formik.errors.phone ? 'error-box' : ''} 
                        ${formik.touched.phone && !formik.errors.phone ? 'success-box' : ''}`}
                                type={"number"}>
                            </input>
                            {
                                formik.errors.phone ? <span style={{ color: "red" }}>{formik.errors.phone}</span> : null
                            }
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>Price</label>
                            <input name="price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                                className='form-control'
                                type={"number"}></input>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>Gender</label>
                            <select name="gender"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.gender}
                                className='form-control'>
                                <option>Select Gender...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    {
                        loading ?
                            <div className='col-md-2'>
                                <button class="btn btn-success" type="button" disabled>
                                <span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                Submitting...
                            </button>
                            </div>
                            :
                            <div className='col-md-2'>
                                <input type={"submit"} className="btn btn-success"></input>
                            </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Createuser