import "./App.css";
import Header from "./component/header/Header";
import FooterPage from "./component/footer/Footer";
import HomePage from "./page/HomePage";
import ManageAccount from "./page/ManageAccount";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import PrivateRoute from "./component/router/PrivateRoute";

function App() {
  const refLogin = useRef();

  return (
    <div className="App">
      <Header refLogin={refLogin} />
      <Routes>
        <Route path="/" element={<HomePage refLogin={refLogin} />} />
        <Route path="/account" element={<PrivateRoute><ManageAccount /></PrivateRoute>} />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
