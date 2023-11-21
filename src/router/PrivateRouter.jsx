import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import ManageAccount from "../page/ManageAccount";
import { useEffect, useState } from "react";

const PrivateRouter = ({ ref }) => {
    const [isLogged, setIsLogined] = useState(false);
    console.log({isLogged});
    useEffect(() => {
        setIsLogined(localStorage.getItem("USER"));
    }, [ref])

  return (
    <Routes>
      <Route path={"/"} element={<HomePage refLogin={ref} />} />
      <Route
        path={"/account"}
        element={isLogged ? <ManageAccount /> : <Navigate to={"/"} />}
      ></Route>
    </Routes>
  );
};
export default PrivateRouter;
