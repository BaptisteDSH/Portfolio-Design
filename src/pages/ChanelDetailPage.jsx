import Footer from "../components/Footer";

const ChanelDetailPage = () => {
  return (
    <div className="detail-page-container">
      <div className="infos-projet-container">
        <h2>CHANEL</h2>
        <h4>Branding, Retail</h4>
        <p>
          Dans le cadre de notre partenariat avec Chanel, nous avons réimaginé
          en équipe l’espace de vente Parfum - Beauté pour répondre aux attentes
          de demain, tout en respectant l’héritage de la maison. Notre concept,
          implanté rue des Francs Bourgeois, se compose d’îlots sensoriels
          immersifs où les clients peuvent explorer l’univers de la beauté
          Chanel à travers des expériences interactives, comme des blind tests.
          Ce nouvel espace met de côté les distinctions de genre pour s’adapter
          aux besoins et envies de chacun, en intégrant des codes de design
          retail modernes et inclusifs.
        </p>
      </div>
      <div className="image-container">
        <img src="assets/Portfolio-site4.jpg" />
        <img src="assets/Portfolio-site5.jpg" />
        <img src="assets/Portfolio-site6.jpg" />
        <img src="assets/Portfolio-site7.jpg" />
        <img src="assets/Portfolio-site8.jpg" />
      </div>
      <Footer />
    </div>
  );
};

export default ChanelDetailPage;
