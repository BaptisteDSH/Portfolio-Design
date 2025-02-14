const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ajoute un effet de défilement fluide
    });
  };

  return (
    <div className="footer">
      {/* <button
        onClick={scrollToTop}
        style={{
          backgroundColor: "transparent",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          fontSize: "1rem",
          position: "absolute", // Cela peut être utile si tu veux un positionnement absolu
          bottom: "20px", // Placer le bouton en bas de la page
        }}
      >
        Back to Top
      </button> */}
    </div>
  );
};

export default Footer;
