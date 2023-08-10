import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import logo from '../images/logoCerberus.png';
import '../styles/register.css';

import { isEmail } from 'validator';

import { HiEnvelope, HiKey, HiUser, HiIdentification } from 'react-icons/hi2';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  

const Reg = (props) => {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const submitRegister = () => {
        navigate("/forum");
    }

    return(
        <div>
            <div className="left-0 top-0 flex items-center">
                <img className="h-20 w-20" src={logo} alt="logo" />
                <div className="font-bold">PT. Cerberus Sinergi Datasistem</div>
            </div>

            <div className="container items-center px-5 py-12 lg:px-20 m-auto">
                <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 formRegister">
                    <h3 className="justify-center items-center m-auto"><strong>CREATE USER</strong></h3>
                    <div className="relative pt-4 flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <HiUser className="w-4 h-4" />
                        </span>
                        <input type="text" id="name" name="name" placeholder="Input Name" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-white focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                    </div>
                    <div class="relative mt-4 flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <HiIdentification className="w-4 h-4" />
                        </span>
                        <select class="w-3/4 px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-white focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                            <option disabled={true} value="">
                            Select Position
                            </option>
                            <option>Junior IT Support</option>
                            <option>Senior IT Support</option>
                            <option>Manager</option>
                        </select>
                    </div>
                    <div className="relative pt-4 flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <HiEnvelope className="w-4 h-4" />
                        </span>
                        <input type="text" id="email" name="email" placeholder="Input Email" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-white focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                    </div>
                    <div className="relative pt-4 flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <HiKey className="w-4 h-4" />
                        </span>
                        <input type="password" id="password" name="password" placeholder="Input Password" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-white focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                    </div>
                    <div className="relative pt-4 flex">
                        <button className="w-1/2 py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}}>Upload Photo</button>
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            Supported Format: PNG, JPG. Max Size: 2MB.
                        </span>
                    </div> 
                    <div className="flex items-center w-full pt-4 mb-4">
                        <button className="w-full py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}} onSubmit={{submitRegister}}>CREATE</button>
                    </div>
                    <div className="m-auto text-sm text-slate-500 hover:text-blue-600">
                        <a href="/login"  >Have an account? Login here.</a>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default Reg;