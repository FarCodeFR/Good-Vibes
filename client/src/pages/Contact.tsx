import type { FormEvent } from "react";
import "../style/contact.css";

function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const data = {
      name,
      email,
      message,
    };

    console.info(data);
  }

  return (
    <main>
      <section id="display-form">

        <h1 className="contact-form">Contacte-nous</h1>
        <p className="para-form">Des bonnes nouvelles à nous partager?</p>
        <p className="para-form">Ecris-nous un message</p>

        <header id="header-form">
          
   


        <form onSubmit={handleSubmit} id="form-container">
          <section id="first-section">
            <label htmlFor="name">Prénom</label>
            <input
              type="text"
              placeholder="Ton p'tit nom mon mignon"
              name="name"
              required
            />
          </section>
          <section id="second-section">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="mail@mail.com"
              required
            />
          </section>
          <section id="third-section">
            <label htmlFor="message">Votre message</label>
            <textarea placeholder="Ton message" name="message" required />
          </section>
          <button type="submit" id="submit-form">
            Soumettre
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
