import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { FaWhatsapp } from "react-icons/fa";
import ScrollToTop from "./utils/helpers/scroll-to-top";

// section
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Samples from "./pages/samples/Samples";
import Exams from "./pages/services/Exams";
import Assignments from "./pages/services/Assignments";
import OnlineClasses from "./pages/services/OnlineClasses";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import "./App.css";

function App() {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  const onLoad = () => {
    // console.log('onLoad works!');
  };


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <TawkMessengerReact
          propertyId="6508863fb1aaa13b7a778a43"
          widgetId="default"
          ref={tawkMessengerRef}
          onLoad={onLoad}
        />

        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* SERVICES */}
          <Route path="/exams" element={<Exams />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/online-classes" element={<OnlineClasses />} />
        </Routes>

        {/* WhatsApp button */}
        <a
          href="https://api.whatsapp.com/send?phone=17163749747"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn flex items-center gap-2 rounded-full px-3 sm:px-5 py-3"
        >
          <FaWhatsapp size={33} /> <span className="hidden sm:flex">Free Quote On Whatsapp</span>
        </a>

        {/* <Dummy /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
