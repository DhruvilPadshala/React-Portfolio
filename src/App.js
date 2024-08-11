import "./App.css";
import Header from "./Pages/Header";
import Home from "./Pages/Home"
import Features from "./Pages/Features"
import Portfolio from "./Pages/Portfolio"
import Resume from './Pages/Resume'
import Contact from "./Pages/Contact"
import Footer from "./Pages/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
