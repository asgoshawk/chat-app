import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import StyledGlobal from "./components/styles/Global.styled";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <StyledGlobal />
      <Router>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
