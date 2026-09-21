import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Articles from "./pages/Articles";
import Reparations from "./pages/Reparations";
import LightRays from "./pages/LightRays";

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      {/* BACKGROUND */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#1a5ac1"
          raysSpeed={1.5}
          lightSpread={0.8}
          pulsating
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/reparations" element={<Reparations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;