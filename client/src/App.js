import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import StyledGlobal from "./components/styles/Global.styled";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <StyledGlobal />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
