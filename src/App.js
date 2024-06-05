// src/App

import './styles/App.css';
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Welcome from "./components/Welcome"
import WithNav from "./layouts/WithNav"
import WithoutNav from "./layouts/WithoutNav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Welcome />} />
          </Route>

          <Route element={<WithNav />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/past-work" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
