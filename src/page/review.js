import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';

import { HiArrowLeft } from "react-icons/hi2";

const Review = () => {
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
                                <img className="h-8 mr-3"  src={profileUser} alt="User" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">User A <br/> Junior ITS</span>
                            </a>
                        <p className="mx-auto text-xl font-semibold justify-center items-center ml-10">
                                KUESIONER PENILAIAN
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
            {/* <div className="flex items-center px-6 pt-4 mb-4 mx-auto">
                <button className="w-full py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}}>CREATE NEW</button>
            </div> */}
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex items-center mb-10">
                    <img className="h-8 mr-3"  src={profileUser} alt="User" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">User B - Manager</span>
                </div>
                <h3>Berikan rating penilaian untuk setiap pertanyaan berikut. Berikut ketentuan dari setiap angka penilaian yang ada. </h3>
                <h3 className="mb-2">1: Sangat Tidak Setuju, 2: Tidak Setuju, 3: Cukup Setuju, 4: Setuju, 5: Sangat Setuju </h3>
                <h3 className="mb-2">1. Memiliki kepemimpinan yang baik dalam mengelola tim?</h3>
                
                <div class="flex">
                    <div class="flex items-center mr-4">
                        <input id="1.1" type="radio" value="" name="inline-radio-group" class="w-4 h-4 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="1.1" class="ml-2 text-sm font-medium dark:text-gray-300">1</label>
                    </div>
                    <div class="flex items-center mr-4">
                        <input id="1.2" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="1.2" class="ml-2 text-sm font-medium dark:text-gray-300">2</label>
                    </div>
                    <div class="flex items-center mr-4">
                        <input id="inline-checked-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="inline-checked-radio" class="ml-2 text-sm font-medium dark:text-gray-300">3</label>
                    </div>
                    <div class="flex items-center mr-4">
                        <input id="1.4" type="radio" value="" name="inline-radio-group" class="w-4 h-4 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="1.4" class="ml-2 text-sm font-medium dark:text-gray-300">4</label>
                    </div>
                    <div class="flex items-center">
                        <input id="1.5" type="radio" value="" name="inline-radio-group" class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="1.5" class="ml-2 text-sm font-medium dark:text-gray-300">5</label>
                    </div>
                </div>

                <textarea id="message" rows="4" class="block p-2.5 mt-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kritik, Saran, atau Komentar Lainnya..."></textarea>
                <div className="space-x-2 md:inline-block mt-2">
                    <button className="px-4 py-2 rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#D2E9E9"}}>
                        Done
                    </button>
                </div>
            </div>
        </div>
        
    );
};

export default Review;