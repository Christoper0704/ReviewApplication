import { useNavigate } from "react-router-dom";


export const LogoutButton = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <button className="px-4 py-2 text-white font-semibold rounded-md shadow hover:text-red-300" style={{backgroundColor: "#F24C3D"}} onClick={logout}>
            Logout
        </button>
    )
}

export const LogoutButtonResponsive = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    
    return (
        <button className="inline-block w-full px-4 py-2 text-center text-white font-semibold rounded-md shadow hover:text-red-300" style={{backgroundColor: "#F24C3D"}} onClick={logout}>
            Logout
        </button>
    )
}