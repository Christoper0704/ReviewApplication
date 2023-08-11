import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';

import { HiArrowLeft } from "react-icons/hi2";

const InputField = () => {
    return <input type="text" id="default-input" class="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Question" />
};

const Qst = () => {
    let navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);
    // const [addQst, setAddQst] = useState([]);

    // const onAddQstClick = () => {
    //     setAddQst(addQst.concat(<InputField key={addQst.length}/>));
    // };

    const initialQuestionnaireState = {
        qstid: null,
        pertanyaan: "",
    }
    const [questionnaire, setQuestionnaire] = useState(initialQuestionnaireState);

    return(
        <>
            <nav className="w-full bg-purple-500 shadow" style={{backgroundColor: "#F8F6F4"}}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 mr-3">
                        <a href="/forum" className="mr-3 text-2xl">
                                <HiArrowLeft />
                            </a>
                            <a href="/" className="flex items-center">
                                <img className="h-8 mr-3"  src={profileUser} alt="User" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">User A <br/> Junior ITS</span>
                            </a>
                        <p className="text-xl font-semibold justify-center items-center mx-10">
                                QUESTIONNAIRE
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
            <div className="container my-12 mx-auto px-4 md:px-12">
                <h3>Buatlah pertanyaan-pertanyaan untuk kuesioner penilaian terhadap karyawan. <strong>Pastikan setiap pertanyaan sudah sesuai sebelum menekan tombol "Add Question"</strong> Penilaian disusun di dalam forum dan dilakukan dengan memberikan nilai yang memiliki rentang 1 hingga 5 dengan ketentuan sebagai berikut. </h3>
                <h3>1: Sangat Tidak Setuju, 2: Tidak Setuju, 3: Cukup Setuju, 4: Setuju, 5: Sangat Setuju </h3>
                <div class="mb-6 mt-2">
                    {/* {addQst} */}
                    <input type="text" id="question" value="question" class="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Question" />
                </div>

                <div className="space-x-2 md:inline-block mt-2">
                    <button className="px-4 py-2 rounded-md shadow hover:bg-gray-100" style={{backgroundColor: "#D2E9E9"}}>
                        Add Question
                    </button>
                </div>
            </div>
</>
        
    );
};

export default Qst;