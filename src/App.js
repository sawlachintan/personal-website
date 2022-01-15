import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import ResponsiveNavBar from "./components/ResponsiveNavBar";
import { Coursework } from "./components/Coursework";
import { Skills } from "./components/Skills";
import { useMediaQuery } from "@mui/material";
import Typewriter from "typewriter-effect";

function App() {
  const nonDesktop = useMediaQuery("(max-width:900px)");
  if (nonDesktop)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#111",
          color: "#eee",
          fontFamily: "Poppins"
        }}
      >
        <Typewriter
          options={{
            strings: ["Mobile Site in Development"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    );
  return (
    <div className="App">
      <ResponsiveNavBar />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coursework" element={<Coursework />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
