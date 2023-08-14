import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';
import modalForum from '../components/modalForum.js';

const Main = () => {
    let navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);
    const [showModalForum, setShowModalForum] = useState(false);

    const getRole = localStorage.getItem("role");

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

            return(
                <>
                    <nav className="w-full bg-purple-500 shadow" style={{backgroundColor: "#F8F6F4"}}>
                        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                            <div>
                                <div className="flex items-center justify-between py-3 md:py-5 mr-3">
                                    <a href="/" className="flex items-center">
                                        <img className="h-10 rounded-full" src={profileUser} alt="User A" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">User A</div>
                                            <div className="font-normal text-gray-500">Junior ITS</div>
                                        </div> 
                                    </a>
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
                                    <a href="#" className="inline-block w-full px-4 py-2 text-center text-white font-semibold rounded-md shadow hover:bg-gray-100" onClick={logout} style={{backgroundColor: "#F24C3D"}}>
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </div>
        
                        <div className="hidden space-x-2 md:inline-block">
                            <a href="#" className="px-4 py-2 text-white font-semibold rounded-md shadow hover:bg-gray-100" onClick={logout} style={{backgroundColor: "#F24C3D"}}>
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
                        <p className="text-2xl font-semibold justify-center items-center mb-10">
                                FORUM
                        </p>
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <a className="no-underline text-black transform transition duration-500 hover:scale-110" href="/forum">
                                    <article className="overflow-hidden rounded-lg shadow-lg" style={{backgroundColor: "#F8F6F4"}}>
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg mx-auto">
                                                IT Support
                                            </h1>
                                        </header>
                                    </article>
                                </a>
                            </div>

                            {getRole === "manager" ?
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <a href="#" className="no-underline text-black transform transition duration-500 hover:scale-110" onClick={() => setShowModalForum(true)}>
                                    <article className="overflow-hidden rounded-lg shadow-lg" style={{backgroundColor: "#F8F6F4"}}>
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg mx-auto">
                                                + Add New Forum
                                            </h1>
                                        </header>
                                    </article>
                                </a>
                            </div>
                            : <></>}
                        </div>
                    </div>
                    {showModalForum ? (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" style={{backgroundColor: ""}}>
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 rounded-t">
                                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Forum</h3>
                                            <button className="top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setShowModalForum(false)}>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>
        
                                        <div class="px-6 lg:px-8">
                                            <form class="space-y-6 mb-4" action="#">
                                                <div>
                                                    <input type="type" name="forum" id="forum" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Input Forum Name" required />
                                                </div>
                                                <button type="submit" class="w-full text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "green"}} onClick={() => setShowModalForum(false)}>Add</button>
                                            </form>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </>
                
            );
};

export default Main;