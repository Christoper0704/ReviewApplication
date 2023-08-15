import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import logo from '../images/logoCerberus.png';
import '../styles/login.css';

import { HiEnvelope, HiKey } from 'react-icons/hi2';
import { Users } from "../data/user";
import Main from "./main";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };


const Login = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const [validateEmail, setValidateEmail] = useState(true);
    const [validatePass, setValidatePass] = useState(false);
    const [errorPassword, setErrorPassword] = useState('');
    const users = Users;

    const getEmail = localStorage.getItem("email");
    const getPassword = localStorage.getItem("password");

    const submitLogin = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.email === email);
        if(!account)
        {
            setValidateEmail(false);
        }
        if(account)
        {
            setValidateEmail(true);
        }
        if(account && account.password !== password)
        {
            setErrorPassword(`Password doesn't match our records`);
        }
        
        if(account && account.password === password)
        {
            setValidatePass(true);
            localStorage.setItem("id", account.id);
            localStorage.setItem("email", account.email);
            localStorage.setItem("password", account.password);
            localStorage.setItem("role", account.role);
            localStorage.setItem("name", account.name);
            localStorage.setItem("position", account.position);
            navigate('/main');
        }
    }
    

    return(
        <>
            {/* <div className="left-0 top-0 flex items-center">
                <img className="h-20 w-20" src={logo} alt="logo" />
                <div className="font-bold">PT. Cerberus Sinergi Datasistem</div>
            </div> */}

        {getEmail && getPassword ? <Main /> :
            <div className="container items-center px-5 py-12 lg:px-20 m-auto">
                <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 formLogin" onSubmit={submitLogin}>
                    <h3 className="justify-center items-center m-auto"><img className="h-30 w-30" src={logo} alt="logo" /></h3>
                    <div className="relative pt-4 flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:text-black dark:border-gray-600">
                            <HiEnvelope className="w-4 h-4" />
                        </span>
                        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Input Email" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-white focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" required/>
                       
                    </div>
                    {!validateEmail ?
                        <span class="text-sm text-red-600 relative px-3"> Email doesn't match our records. </span>
                        : <></> }
                    <div className="relative pt-4 flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md dark:text-black dark:border-gray-600">
                            <HiKey className="w-4 h-4" />
                        </span>
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Input Password" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-white focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" required/>
                        
                    </div> 
                    {!validatePass ?
                        <span class="text-sm text-red-600 px-3 relative"> {errorPassword} </span>
                        : <></> }
                    <div className="relative pt-4 text-md text-slate-500 hover:text-blue-600">
                        <a href="/">Forgot password? Click here.</a>
                    </div>
                    <div className="flex items-center w-full pt-4 mb-4">
                        <input type="submit" className="w-full py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 cursor-pointer" value="LOGIN" style={{backgroundColor: "#D2E9E9"}}></input>
                    </div>
                    <div className="m-auto text-md text-slate-500 hover:text-blue-600">
                        <a href="/register">New here? Create an user account. </a>
                    </div>
                </form>
            </div>
}
        </>
        
    );
};

export default Login;