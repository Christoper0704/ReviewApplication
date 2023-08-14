import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';

import { HiArrowLeft } from 'react-icons/hi2';

const ReviewView = () => {
    let navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);

    return(
        <div>  
           <nav className="w-full bg-purple-500 shadow" style={{backgroundColor: "#F8F6F4"}}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5">
                            <a href="/forum" className="mr-3 text-2xl">
                                <HiArrowLeft />
                            </a>
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
                        <a href="/" className="px-4 py-2 text-white font-semibold rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#F24C3D"}}>
                            Logout
                        </a>
                        </div>
                    </div>
                </div>

                <div className="hidden space-x-2 md:inline-block">
                    <a href="/" className="px-4 py-2 text-white font-semibold rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#F24C3D"}}>
                        Logout
                    </a>
                </div>
            </div>
        </nav>
            {/* <div className="flex items-center px-6 pt-4 mb-4 mx-auto">
                <h1>Belum Ada Hasil Review yang Masuk.</h1>
            </div> */}
            <div className="flex justify-center min-h-screen p-10">
                <div className="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5 text-black">
                    <div className="flex flex-col gap-3 mt-14">
                        <div className="flex flex-col gap-4 p-4 rounded-lg mb-10" style={{backgroundColor: "#F8F6F4"}}>
                            <div className="flex justify justify-between">
                                <div className="flex gap-2">
                                    <img src={profileUser} className="w-7 h-7" alt="Anonymous"/>
                                    <span>Anonymous</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-lg">
                                <div style={{color: "green"}}>Pencapaian: 90%</div>
                                <div></div>
                                <div className="font-semibold">Target: 75%</div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="flex justify-between text-md">
                                Tingkatkan kinerja!!
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-4 rounded-lg mb-10" style={{backgroundColor: "#F8F6F4"}}>
                            <div className="flex justify justify-between">
                                <div className="flex gap-2">
                                    <img src={profileUser} className="w-7 h-7" alt="Anonymous"/>
                                    <span>Anonymous</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-lg">
                                <div style={{color: "green"}}>Pencapaian: 90%</div>
                                <div></div>
                                <div className="font-semibold">Target: 75%</div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="flex justify-between">
                                Saran atau Kritik: Tingkatkan kinerja!!
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ReviewView;