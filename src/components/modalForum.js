import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import profileUser from '../images/profile.png';

const modalForum = () => {
    let navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);
    const [modalForum, setModalForum] = useState(false);

    return(
        <>
            <div >

            </div>
        </>
        
    );
};

export default modalForum;