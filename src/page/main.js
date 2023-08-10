import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';

const Main = () => {
    let navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);

    return(
        <div>
            <nav className="w-full bg-purple-500 shadow" style={{backgroundColor: "#F8F6F4"}}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 mr-3">
                            <a href="/" className="flex items-center">
                                <img className="h-8 mr-3"  src={profileUser} alt="User" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">User A <br/> Junior ITS</span>
                            </a>
                        <p className="text-xl font-semibold justify-center items-center mx-10">
                                FORUM
                        </p>
                        <div className="md:hidden">
                            <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div>    
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>   
                        <div className="mt-3 space-y-2 lg:hidden md:inline-block md:hidden">
                            <a href="/" className="inline-block w-full px-4 py-2 text-center text-gray-800 rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#D2E9E9"}}>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hidden space-x-2 md:inline-block">
                    <a href="/" className="px-4 py-2 rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#D2E9E9"}}>
                        Logout
                    </a>
                </div>
            </div>
        </nav>  
            {/* <nav className="border-gray-200 dark:bg-gray-900" style={{backgroundColor: "#F8F6F4"}}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <img className="h-8 mr-3"  src={profileUser} alt="User" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">User A <br/> Junior ITS</span>
                    </a>
                    <p className="justify-center items-center mx-auto text-xl font-semibold">FORUM</p>
                </div>
            </nav> */}
            {/* <div className="flex items-center px-6 pt-4 mb-4 mx-auto">
                <button className="w-full py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}}>CREATE NEW</button>
            </div> */}
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <a className="no-underline text-black transform transition duration-500 hover:scale-110" href="/forum">
                            <article className="overflow-hidden rounded-lg shadow-lg" style={{backgroundColor: "#D2E9E9"}}>
                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg mx-auto">
                                        IT Support
                                    </h1>
                                </header>
                            </article>
                        </a>
                    </div>

                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <a className="no-underline text-black transform transition duration-500 hover:scale-110" href="#">
                            <article className="overflow-hidden rounded-lg shadow-lg" style={{backgroundColor: "#D2E9E9"}}>
                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg mx-auto">
                                        + Add New Forum
                                    </h1>
                                </header>
                            </article>
                        </a>
                    </div>
            </div>
     </div>
</div>
        
    );
};

export default Main;