import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-b from-[#00001F] to-[#2E3387] flex items-center justify-center relative overflow-hidden">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
