function Contact() {
  return (
    <section id="display-form">
      <h1>Contacte-nous</h1>
      <h3>Des bonnes nouvelles à nous partager?</h3>
      <p>Ecris-nous un message</p>

      <form action="">
        <label htmlFor="">Prénom</label>
        <input type="text" placeholder="Ton p'tit nom mon mignon" required />

        <label htmlFor="">E-mail</label>
        <input type="email" placeholder="mail@mail.com" required />

        <label htmlFor="">Votre message</label>
        <input type="text-area" placeholder="Ton message" required />
      </form>
    </section>
  );
}

export default Contact;
