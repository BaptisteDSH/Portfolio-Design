import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import { Route, Routes } from "react-router-dom";
import MyCvPage from "./pages/MyCvPage";
import ContactPage from "./pages/ContactPage";
import ChanelDetailPage from "./pages/ChanelDetailPage";
import ConversationDetailPage from "./pages/ConversationDetailPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CV" element={<MyCvPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Chanel" element={<ChanelDetailPage />} />
        <Route path="/Conversation" element={<ConversationDetailPage />} />
      </Routes>

      <AnimatedCursor
        innerSize={12} // Réduire la taille du point interne
        outerSize={24} // Réduire la taille de l'anneau externe
        color="0, 4, 115"
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
              innerSize: 18, // Taille du point personnalisé
              outerSize: 36, // Taille de l'anneau personnalisé
              color: "0, 4, 115",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
    </>
  );
}

export default App;
