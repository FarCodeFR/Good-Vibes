import "../style/societe.css";

function Societe() {
  return (
    <main className="container-societe-main">
      <section className="container-societe">
        <h1>Société</h1>
        <div className="trait-societe">
          <hr />
        </div>
      </section>
      <section className="articles-societe">
        <figure className="articles-figure-societe">
          <img src="src/assets/images/favicon.png" alt="" />
        </figure>
        <article>
          <h2 className="articles-hashtag-societe">#Société </h2>
          <h3 className="articles-title-societe">
            Des chercheurs suisses redonnent espoir à des blessés à la moelle
            épinière
          </h3>
          <p className="articles-content-societe">
            Un espoir pour certaines personnes atteintes de lésions de la moelle
            épinière : la stimulation profonde de certaines zones du cerveau par
            des électrodes pourrait les aider à marcher plus aisément, selon une
            étude et un témoignage diffusés ce lundi par l’école polytechnique
            fédérale de Lausanne.
          </p>
          <p className="articles-link-societe">Voir plus</p>
        </article>
      </section>
    </main>
  );
}
export default Societe;
