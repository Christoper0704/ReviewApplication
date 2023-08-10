import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';

const navbarForum = () => {
    return(
        <nav className="border-gray-200 dark:bg-gray-900" style={{backgroundColor: "#F8F6F4"}}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                <img className="h-8 mr-3"  src={profileUser} alt="User" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">User A <br/> Junior ITS</span>
                </a>
                <p className="justify-center items-center mx-auto text-xl font-semibold">FORUM</p>
            </div>
        </nav>
        
    );
};

export default navbarForum;