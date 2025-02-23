import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MyCvPage from "./pages/MyCvPage";
import ContactPage from "./pages/ContactPage";
import ChanelDetailPage from "./pages/ChanelDetailPage";
import ConversationDetailPage from "./pages/ConversationDetailPage";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.querySelectorAll("button.active").forEach((btn) => {
      btn.classList.remove("active");
    });
  }, [location]);

  return (
    <main className={darkTheme ? "dark" : ""}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CV" element={<MyCvPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Chanel" element={<ChanelDetailPage />} />
        <Route path="/Conversation" element={<ConversationDetailPage />} />
      </Routes>

      {!isMobile && (
        <AnimatedCursor
          innerSize={12}
          outerSize={24}
          color="0, 0, 0"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
              options: {
                innerSize: 18,
                outerSize: 36,
                color: "0, 4, 115",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
      )}
    </main>
  );
}

export default App;
