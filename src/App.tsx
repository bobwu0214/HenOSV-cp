import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Modeling from "./pages/Modeling";

function App() {
  return (
    <Router basename="/HenOSV-cp">
      {/* ✅ 让 Navbar 适用于所有页面 */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modeling" element={<Modeling />} />
      </Routes>
    </Router>
  );
}

export default App;
