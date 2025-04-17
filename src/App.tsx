import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Modeling from "./pages/Modeling";
import Docs from "./pages/Docs";
import Guide from "./pages/guide";

function App() {
  return (
    <Router >
      {/* ✅ 让 Navbar 适用于所有页面 */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modeling" element={<Modeling />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
}

export default App;
