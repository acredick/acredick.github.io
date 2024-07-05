// src/App

import './styles/App.css';
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
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
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
