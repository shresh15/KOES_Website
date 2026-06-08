import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Stats from "./components/Stats";
import NoticeBoard from "./components/NoticeBoard";
import Gallery from "./components/Gallery";
import AdmissionCTA from "./components/AdmissionCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginPortal from "./components/LoginPortal";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <ScrollToHash />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                {/* SVG wave transition */}
                <div className="w-full overflow-hidden leading-[0] bg-gray-100 -mt-1 select-none pointer-events-none">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1440 320" 
                    className="w-full h-auto"
                  >
                    <path 
                      fill="#ffffff" 
                      fillOpacity="1" 
                      d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,128C672,149,768,235,864,245.3C960,256,1056,192,1152,138.7C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                  </svg>
                </div>
                <About />
                <Stats />
                <NoticeBoard />
                <Gallery />
                <AdmissionCTA />
                <Contact />
              </>
            }
          />
          <Route path="/login" element={<LoginPortal />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
