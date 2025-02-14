const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ajoute un effet de défilement fluide
    });
  };

  return (
    <div className="footer">
      <button
        onClick={scrollToTop}
        style={{
          backgroundColor: "transparent" /* Fond transparent */,
          color: "white",
          padding: "10px 20px",
          border: "none" /* Enlève les bordures */,
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          fontSize: "1rem",
        }}
      >
        Back to Top
      </button>
    </div>
  );
};

export default Footer;
