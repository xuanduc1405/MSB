import "./App.css";
import Header from "./component/header/Header";
import FooterPage from "./component/footer/Footer";
import { useRef } from "react";
import PrivateRouter from "./router/PrivateRouter";
import PopupLogin from "./component/login/PopupLogin";

function App() {
  const refLogin = useRef();
  return (
    <div className="App">
      <Header refLogin={refLogin}/>
      <PrivateRouter ref={refLogin} />
      <FooterPage />
      <PopupLogin refLogin={refLogin}/>
    </div>
  );
}

export default App;
