import "../style/contact.css";

function Contact() {
  return (
    <main>
      <section id="display-form">
        <h1>Contacte-nous</h1>
        <p>Des bonnes nouvelles à nous partager?</p>
        <p>Ecris-nous un message</p>

        <form action="" id="form-container">
          <section id="first-section">
            <label htmlFor="">Prénom</label>
            <input
              type="text"
              placeholder="Ton p'tit nom mon mignon"
              required
            />
          </section>
          <section id="second-section">
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="mail@mail.com" required />
          </section>
          <section id="third-section">
            <label htmlFor="">Votre message</label>
            <textarea placeholder="Ton message" rows={5} cols={40} required />
          </section>
        </form>
      </section>
    </main>
  );
}

export default Contact;
