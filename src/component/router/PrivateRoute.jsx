import React, { useEffect, useState } from 'react'
import { Navigate } from "react-router-dom";
import useLocalStorageChange from "../../utilities/hooks/useLocalStorage";
import { handleCheckToken } from "../../utilities/helpers";

const PrivateRoute = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    const handleStorageChange = (e) => {
        const user = e?.detail?.["USER"];
        handleCheckToken(user, setIsLogged);
    };

    useLocalStorageChange({ callback: handleStorageChange });
    useEffect(() => {
        const user = localStorage.getItem("USER");
        handleCheckToken(user, setIsLogged);
    }, []);

    return isLogged ? <>{children}</> : <Navigate to="/" />;
}

export default PrivateRoute;