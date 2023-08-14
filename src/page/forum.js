import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';
import { HiTrash, HiArrowLeft } from 'react-icons/hi2';

const Forum = () => {
    let navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);
    const [showModalForum, setShowModalForum] = useState(false);

    const openReview = () => {
        navigate('/review');
    }

    return(
        <>
            <nav className="w-full bg-purple-500 shadow" style={{backgroundColor: "#F8F6F4"}}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5">
                            <a href="/main" className="mr-3 text-2xl">
                                <HiArrowLeft />
                            </a>
                            <a href="/" className="flex items-center">
                                <img className="h-10 rounded-full" src={profileUser} alt="User A" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">User A</div>
                                    <div className="font-normal text-gray-500">Junior ITS</div>
                                </div>                             
                            </a>
                        <div className="hidden space-x-2 md:inline-block">
                            <a href="/viewreview">
                                <button className="px-4 py-2 mx-6 rounded-md shadow hover:bg-gray-800" style={{backgroundColor: "#D2E9E9"}}>View Review</button>
                            </a>
                        </div>
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
                            <a href="/viewreview" className="inline-block w-full px-4 py-2 text-center rounded-md shadow hover:bg-gray-800" style={{backgroundColor: "#D2E9E9"}}>
                                View Review
                            </a>
                            <a href="/" className="inline-block w-full px-4 py-2 text-center rounded-md shadow hover:bg-gray-800" style={{backgroundColor: "#D2E9E9"}}>
                                Add User
                            </a>
                            <a href="/qst" className="inline-block w-full px-4 py-2 text-center text-gray-800 rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#D2E9E9"}}>
                                Add Questionnaire
                            </a>
                            <a href="/" className="px-4 py-2 text-white font-semibold rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#F24C3D"}}>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hidden space-x-2 md:inline-block">
                    <a href="/" className="px-4 py-2 rounded-md shadow hover:bg-gray-800 text-white font-semibold" style={{backgroundColor: "green"}}>
                        +User
                    </a>
                    <a href="/qst" className="px-4 py-2 rounded-md shadow hover:bg-gray-100 text-white font-semibold" style={{backgroundColor: "green"}}>
                        +Questionnaire
                    </a>
                    <a href="/" className="px-4 py-2 text-white font-semibold rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#F24C3D"}}>
                        Logout
                    </a>
                </div>
            </div>
        </nav>
            {/* <nav className="border-gray-200 dark:bg-gray-900" style={{backgroundColor: "#F8F6F4"}}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/main" className="mr-3 text-2xl">
                        <HiArrowLeft />
                    </a>
                    <a href="#" className="flex items-center">
                        <img className="h-8 mr-3"  src={profileUser} alt="User" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">User A <br/> Junior ITS</span>
                    </a>
                    <div className="hidden md:flex">

                    <a href="/viewreview">
                        <button className="px-4 mx-6 py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}}>View Review</button>
                    </a>
                    </div>
                    <p className="mx-auto text-xl font-semibold">IT SUPPORT</p>
                    <div className="hidden md:flex">

                    <button className="px-4 ml-6 py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}}>+ User</button>
                    <button className="px-4 ml-6 py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}}>+ Questionnaire</button>
                    <button className="px-4 ml-6 py-3 text-base transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" style={{backgroundColor: "#D2E9E9"}}>Logout</button>
                    </div>

                    <div class="md:hidden flex items-center">
                        <button class="outline-none mobile-menu-button">
                            <svg
                                class="w-6 h-6 text-gray-500"
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div class="hidden mobile-menu">
                        <ul class="">
                            <li><a href="/viewreview" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">View Review</a></li>
                            <li><a href="/" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
                            <li><a href="/qst" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Questionnaire</a></li>
                            <li><a href="/" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <div className="container my-12 mx-auto px-4 md:px-12">
                <p className="mx-auto text-2xl font-semibold justify-center items-center mb-10">
                                IT SUPPORT
                </p>
                <h4 className="font-semibold">Klik baris data user di bawah tabel ini untuk memberikan review dan edit review yang telah diberikan.</h4>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400" style={{backgroundColor: "#D8D9DA"}}>
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-10 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" onClick={openReview}>
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-10 h-10 rounded-full" src={profileUser} alt="User B" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">User B</div>
                                            <div className="font-normal text-gray-500">Manager</div>
                                        </div>  
                                    </th>
                                    <td className="px-10 py-4">
                                        Unreviewed
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-black dark:text-blue-500"><HiTrash /></a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-10 h-10 rounded-full" src={profileUser} alt="User A" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">User C</div>
                                            <div className="font-normal text-gray-500">Senior ITS</div>
                                        </div>  
                                    </th>
                                    <td className="px-10 py-4">
                                        Unreviewed
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-black dark:text-blue-500"><HiTrash /></a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-10 h-10 rounded-full" src={profileUser} alt="User A" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">User D</div>
                                            <div className="font-normal text-gray-500">Junior ITS</div>
                                        </div>  
                                    </th>
                                    <td className="px-10 py-4">
                                        Unreviewed
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-black dark:text-blue-500"><HiTrash /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
            {
                showModalForum ? (
                    <>
                        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            </div>
                    </>
                ) : null
            }
        </>
        
    );
};

export default Forum;