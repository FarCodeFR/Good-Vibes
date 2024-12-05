function contact() {
  return (
    <section>
      <h1>Contacte-nous</h1>
      <p>Des bonnes nouvelles à nous partager?</p>
      <p>Ecris nous un message</p>
      <form action="">
        <label htmlFor="">Prénom</label>
        <input type="text" placeholder="Ton p'tit nom mon mignon" required />

        <label htmlFor="">E-mail</label>
        <input type="email" placeholder="ton-email@gmail.com" required />

        <label htmlFor="">Votre message</label>
        <input type="text" placeholder="Tapez votre message ici..." />
      </form>
    </section>
  );
}

export default contact;
