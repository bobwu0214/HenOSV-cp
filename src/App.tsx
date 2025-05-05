import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Modeling from "./pages/Modeling";
import Guide from "./pages/guide";
import Docs from "./pages/Docs";
import Navbar from "./components/Navbar";
import Kit from "./pages/kit";
import HenOSV from "./pages/henosv";
import Simulator from "./pages/simulator";
import SimulatorLab from "./pages/simulatorlab";
import "./App.css";

function App() {
  return (
    <Router >
      {/* ✅ 让 Navbar 适用于所有页面 */}
      <Navbar />
      <div className="w-full overflow-x-hidden"> {/* 添加这个包装div */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modeling" element={<Modeling />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/kit" element={<Kit />} />
          <Route path="/henosv" element={<HenOSV />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/simulatorlab" element={<SimulatorLab />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
