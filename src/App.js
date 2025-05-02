import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home2";
import Features from "./Components/Features";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import ScrollToTop from "./Components/ScrollToTop";
import GatePassProjectDetails from "./Components/gate-pass";
import GatePassApp from "./Components/gate-pass-App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Features />
              <Portfolio />
              <Resume />
              <Blog />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/GatePassProjectDetails"
          element={<GatePassProjectDetails />}
        />
        <Route path="/GatePassApp" element={<GatePassApp />} />
      </Routes>
    </Router>
  );
}
