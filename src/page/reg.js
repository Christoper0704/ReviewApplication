import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import logo from '../images/logoCerberus.png';
import '../styles/register.css';

import { HiEnvelope, HiKey, HiUser, HiIdentification } from 'react-icons/hi2';

// const required = (value) => {
//     if (!value) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This field is required!
//         </div>
//       );
//     }
//   };

  

const Reg = (props) => {
    let navigate = useNavigate();

    // const form = useRef();
    // const checkBtn = useRef();

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [loading, setLoading] = useState(false);
    const [inputFields, setInputFields] = useState({
        name: "",
        position: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [photo, setPhoto] = useState();
    const validateValues = (inputValues) => {
        let errors = {};
        if(inputValues.name.length === 0) {
            errors.name = "Name must be filled";
        }
        if (inputValues.email.length === 0) {
          errors.email = "Email must be filled";
        }
        if (inputValues.password.length < 5) {
          errors.password = "Password is too short";
        }
        return errors;
      };
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };

    const handleChangePhoto = (e) => {
        setPhoto(URL.createObjectURL(e.target.files[0]));
    }

    const submitRegister = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    }

    const finishSubmit = () => {
        navigate('/main');
      };
    
      useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
          finishSubmit();
        }
      }, [errors]);

    return(
        <div>
            {/* <div className="left-0 top-0 flex items-center">
                <img className="h-20 w-20" src={logo} alt="logo" />
                <div className="font-bold">PT. Cerberus Sinergi Datasistem</div>
            </div> */}

            <div className="container items-center px-5 py-12 lg:px-20 m-auto">
                        {Object.keys(errors).length === 0 && submitting ? (
                    <span className="success">Successfully submitted ✓</span>
                ) : null}
                <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 formRegister" onSubmit={submitRegister}>
                    <h3 className="justify-center items-center m-auto"><img className="h-30 w-30" src={logo} alt="logo" /></h3>
                    <div className="relative pt-4 flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:text-black dark:border-gray-600">
                            <HiUser className="w-4 h-4" />
                        </span>
                        <input type="text" id="name" name="name" value={inputFields.name} onChange={handleChange} placeholder="Input Name" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-white focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"/>
                    </div>
                        {errors.name ? (
                            <p className="error text-red-500">Name must be filled</p>
                        ) : null}
                    <div class="relative mt-4 flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:text-black dark:border-gray-600">
                            <HiIdentification className="w-4 h-4" />
                        </span>
                        <select class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-white focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                            <option disabled={true} value="">
                            Select Position
                            </option>
                            <option value={inputFields.position} onChange={handleChange}>Junior IT Support</option>
                            <option value={inputFields.position} onChange={handleChange}>Senior IT Support</option>
                            <option value={inputFields.position} onChange={handleChange}>Junior Frontend</option>
                            <option value={inputFields.position} onChange={handleChange}>Senior Frontend</option>
                            <option value={inputFields.position} onChange={handleChange}>Junior Backend</option>
                            <option value={inputFields.position} onChange={handleChange}>Senior Backend</option>
                            <option value={inputFields.position} onChange={handleChange}>Manager IT Support</option>
                            <option value={inputFields.position} onChange={handleChange}>Manager Frontend</option>
                            <option value={inputFields.position} onChange={handleChange}>Manager Backend</option>
                            <option value={inputFields.position} onChange={handleChange}>Direktur Utama</option>
                        </select>
                    </div>
                    <div className="relative pt-4 flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:text-black dark:border-gray-600">
                            <HiEnvelope className="w-4 h-4" />
                        </span>
                        <input type="text" id="email" name="email" value={inputFields.email} onChange={handleChange} placeholder="Input Email" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-white focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"/>
                    </div>
                    {errors.email ? (
                            <p className="error text-red-500">Email must be filled</p>
                        ) : null}
                    <div className="relative pt-4 flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:text-black dark:border-gray-600">
                            <HiKey className="w-4 h-4" />
                        </span>
                        <input type="password" id="password" name="password" value={inputFields.password} onChange={handleChange} placeholder="Input Password" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-white focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"/>
                        
                    </div>
                    {errors.password ? (
                            <p className="error text-red-500">Password must be maximum at 5 characters</p>
                        ) : null}
                    <div className="relative pt-4 flex">
                        <button type="file" onChange={handleChangePhoto} className="w-1/2 py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}}>Upload Photo</button>
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:text-black dark:border-gray-600">
                            Supported Format: PNG, JPG. Max Size: 2MB.
                        </span>
                    </div> 
                    <div className="flex items-center w-full pt-4 mb-4">
                        <button type="submit" className="w-full py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}}>REGISTER</button>
                    </div>
                    <div className="m-auto text-md text-slate-500 hover:text-blue-600">
                        <a href="/login">Have an account? Login here.</a>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default Reg;