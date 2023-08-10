import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';

const Main = () => {
    let navigate = useNavigate();

    return(
        <div>  
            <nav className="border-gray-200 dark:bg-gray-900" style={{backgroundColor: "#F8F6F4"}}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <img className="h-8 mr-3"  src={profileUser} alt="User" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">User A <br/> Junior ITS</span>
                    </a>
                    <p className="justify-center items-center mx-auto text-xl font-semibold">FORUM</p>
                </div>
            </nav>
            {/* <div className="flex items-center w-1/4 pt-4 mb-4 mx-auto">
                <button className="w-full py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}}>CREATE NEW</button>
            </div> */}
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <a className="no-underline text-black transform transition duration-500 hover:scale-110" href="#">
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