import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Common from "./pages/Common";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import StyledGlobal from "./components/styles/Global.styled";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <StyledGlobal />
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Common />} />
          </Route>
          <Route path="/group/:id" element={<PrivateRoute />}>
            <Route path="/group/:id" element={<Chat />} />
          </Route>
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
