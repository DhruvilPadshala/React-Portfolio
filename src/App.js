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
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
