import "./App.css";
import Header from "./component/header/Header";
import FooterPage from "./component/footer/Footer";
import HomePage from "./page/HomePage";
import ManageAccount from "./page/ManageAccount";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import PrivateRoute from "./component/router/PrivateRoute";
import ErrorPage from "./page/404NotFound";

function App() {
  const refLogin = useRef();

  return (
    <div className="App">
      <Header refLogin={refLogin} />
      <Routes>
        <Route exact path="/" element={<HomePage refLogin={refLogin} />} />
        <Route exact path="/account" element={<PrivateRoute><ManageAccount /></PrivateRoute>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
