import React, { useEffect, useState } from 'react'
import { Navigate } from "react-router-dom";
import useLocalStorageChange from "../../utilities/hooks/useLocalStorage";
import { handleCheckToken } from "../../utilities/helpers";

const PrivateRoute = ({ children }) => {
    const [isLogged, setIsLogged] = useState(true);
    const handleStorageChange = (e) => {
        const user = e?.detail?.["USER"];
        handleCheckToken(user, (status) => setTimeout(() => setIsLogged(status), 100));
    };

    useLocalStorageChange({ callback: handleStorageChange });
    useEffect(() => {
        const user = localStorage.getItem("USER");
        handleCheckToken(user, (status) => setTimeout(() => setIsLogged(status), 100));
    }, []);

    if(isLogged) return <>{children}</>;
    return  <Navigate to="/" />;
}

export default PrivateRoute;