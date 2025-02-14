import { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoi du formulaire via EmailJS
    emailjs
      .sendForm(
        "service_yourServiceID", // Remplacez par votre Service ID
        "template_yourTemplateID", // Remplacez par votre Template ID
        e.target,
        "user_yourUserID" // Remplacez par votre User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
        },
        (error) => {
          console.log(error.text);
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-page">
        <h1>Contactez-moi</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
