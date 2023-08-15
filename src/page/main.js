import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';
import { HiComputerDesktop, HiCheckCircle, HiTrash } from 'react-icons/hi2';

import { LogoutButton, LogoutButtonResponsive } from "../components/Button";

import '../styles/main.css';

const Main = () => {
    let navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);
    const [showModalForum, setShowModalForum] = useState(false);
    const [showSuccessMessage, setSuccessMessage] = useState(false);
    const [forumName, setForumName] = useState('');
    const [forumList, setForumList] = useState([]);

    const getRole = localStorage.getItem("role");
    const getName = localStorage.getItem("name");
    const getPosition = localStorage.getItem("position");
    const storedForums = JSON.parse(localStorage.getItem('forum'));
    

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    const openForumPage = () => {
        navigate('/forum');
    }

    const addForum = (e) => {
        e.preventDefault();
        
        forumList.push(forumName);
        localStorage.setItem('forum', JSON.stringify(forumList));
        setSuccessMessage(true);
        setShowModalForum(false);
    }

    const renderForumList = storedForums ?
    storedForums.map((item, index) =>  
    <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <button className="w-full no-underline text-black transform transition duration-500 hover:scale-110" onClick={openForumPage}>
            <article className="overflow-hidden rounded-lg shadow-lg" style={{backgroundColor: "#F8F6F4"}}>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <HiComputerDesktop className="w-5 h-5" />
                    <h1 className="text-lg mx-auto">
                        {item}
                    </h1>
                    <HiTrash className="w-5 h-5 hover:text-red-400" />
                </header>
            </article>
        </button>
    </div>) : <></>


            return(
                <>
                    <nav className="w-full bg-purple-500 shadow" style={{backgroundColor: "#F8F6F4"}}>
                        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                            <div>
                                <div className="flex items-center justify-between py-3 md:py-5 mr-3">
                                    <a href="/main" className="flex items-center">
                                        <img className="h-10 rounded-full" src={profileUser} alt={getName} />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">{getName}</div>
                                            <div className="font-normal text-gray-500">{getPosition}</div>
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
                                    <LogoutButtonResponsive />
                                </div>
                            </div>
                        </div>
        
                        <div className="hidden space-x-2 md:inline-block">
                            <LogoutButton />
                        </div>
                    </div>
                </nav>  
                    <div className="container my-12 mx-auto px-4 md:px-12">
                    {showSuccessMessage ? (
                        <div
                        className=
                          "text-white w-3/4 justify-center mx-auto items-center px-6 py-4 border-0 rounded relative mb-4 bg-green-500 top-0 relative">
                        <span className="text-xl inline-block mr-5 align-middle">
                          <HiCheckCircle />
                        </span>
                        <span className="inline-block align-middle mr-8">
                          <b className="capitalize">Success Add Forum</b>
                        </span>
                        <button
                          className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                          onClick={() => setSuccessMessage(false)}
                        >
                          <span>×</span>
                        </button>
                      </div>                        
                    ) : null}
                        <p className="text-2xl font-semibold justify-center items-center mb-10">
                                FORUM
                        </p>
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <button className="w-full no-underline text-black transform transition duration-500 hover:scale-110" onClick={openForumPage}>
                                    <article className="overflow-hidden rounded-lg shadow-lg" style={{backgroundColor: "#F8F6F4"}}>
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <HiComputerDesktop className="w-5 h-5" />
                                            <h1 className="text-lg mx-auto">
                                                IT Support
                                            </h1>
                                            <HiTrash className="w-5 h-5 hover:text-red-400" />
                                        </header>
                                    </article>
                                </button>
                            </div>

                            {renderForumList}

                            {getRole === "manager" ?
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <button className="w-full no-underline text-black transform transition duration-500 hover:scale-110" onClick={() => setShowModalForum(true)}>
                                    <article className="overflow-hidden rounded-lg shadow-lg" style={{backgroundColor: "#F8F6F4"}}>
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg mx-auto">
                                                + Add New Forum
                                            </h1>
                                        </header>
                                    </article>
                                </button>
                            </div>
                            : <></>}
                        </div>
                    </div>
                    {showModalForum ? (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 rounded-t">
                                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-black">Add Forum</h3>
                                            <button className="top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setShowModalForum(false)}>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>
        
                                        <div class="px-6 lg:px-8">
                                            <form class="space-y-6 mb-4" action="#" onSubmit={addForum}>
                                                <div>
                                                    <input type="type" name="forum" id="forum" onChange={(e) => setForumName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-black dark:text-black" placeholder="Input Forum Name" required />
                                                </div>
                                                <button type="submit" class="w-full text-white hover:text-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "green"}}>Add</button>
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