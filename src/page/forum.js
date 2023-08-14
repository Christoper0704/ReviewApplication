import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';
import { HiTrash, HiArrowLeft } from 'react-icons/hi2';

const Forum = () => {
    let navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);
    const [showModalUser, setShowModalUser] = useState(false);

    const openReview = () => {
        navigate('/review');
    }

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    const getRole = localStorage.getItem("role");

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
                            
                            {getRole === "manager" ?
                            <>
                                <a href="#" className="inline-block w-full px-4 py-2 text-center rounded-md shadow hover:bg-gray-800" style={{backgroundColor: "#D2E9E9"}} onClick={() => setShowModalUser(true)}>
                                    Add User
                                </a>
                                <a href="/qst" className="inline-block w-full px-4 py-2 text-center text-gray-800 rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#D2E9E9"}}>
                                    Add Questionnaire
                                </a>
                            </>
                            : <></> }
                            <a href="/" className="inline-block w-full px-4 py-2 text-white text-center font-semibold rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#F24C3D"}} onClick={logout}>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hidden space-x-2 md:inline-block">
                    {getRole === "manager" ?
                    <>
                    <a href="#" className="px-4 py-2 rounded-md shadow hover:bg-gray-800 text-white font-semibold" style={{backgroundColor: "green"}} onClick={() => setShowModalUser(true)}>
                        +User
                    </a>
                    <a href="/qst" className="px-4 py-2 rounded-md shadow hover:bg-gray-100 text-white font-semibold" style={{backgroundColor: "green"}}>
                        +Questionnaire
                    </a>
                    </> : <></> }
                    <a href="/" className="px-4 py-2 text-white font-semibold rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#F24C3D"}} onClick={logout}>
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
                showModalUser ?
                    (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" style={{backgroundColor: ""}}>
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 rounded-t">
                                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add User</h3>
                                            <button className="top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setShowModalUser(false)}>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>
        
                                        <div class="px-6 lg:px-8">
                                            <form class="space-y-6 mb-4" action="#">
                                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                                <div class="relative">
                                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                        </svg>
                                                    </div>
                                                    <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search User" required />
                                                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                                </div>
                                            </form>
                                            <div className="flex items-center mb-10 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                                                <img className="h-10 rounded-full" src={profileUser} alt="User A" />
                                                <div className="pl-3">
                                                    <div className="text-base font-semibold">User A</div>
                                                    <div className="font-normal text-gray-500">Junior ITS</div>
                                                </div>
                                            </div> 
                                            <div className="flex items-center mb-10 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                                                <img className="h-10 rounded-full" src={profileUser} alt="User A" />
                                                <div className="pl-3">
                                                    <div className="text-base font-semibold">User A</div>
                                                    <div className="font-normal text-gray-500">Junior ITS</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center mb-10 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                                                <img className="h-10 rounded-full" src={profileUser} alt="User A" />
                                                <div className="pl-3">
                                                    <div className="text-base font-semibold">User A</div>
                                                    <div className="font-normal text-gray-500">Junior ITS</div>
                                                </div>
                                            </div>  
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null
            }
        </>
        
    );
};

export default Forum;