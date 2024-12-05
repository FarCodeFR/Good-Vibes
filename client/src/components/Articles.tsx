import "../style/globals.css";
import "../style/articles.css";

function Articles() {
  return (
    <>
      <section className="articles-main">
        <figure className="articles-figure">
          <img src="src/assets/images/favicon.png" alt="" />
        </figure>
        <article>
          <h3 className="articles-hashtag">#Société </h3>
          <h4 className="articles-title">
            Des chercheurs suisses redonnent espoir à des blessés à la moelle
            épinière
          </h4>
          <p className="articles-content">
            Un espoir pour certaines personnes atteintes de lésions de la moelle
            épinière : la stimulation profonde de certaines zones du cerveau par
            des électrodes pourrait les aider à marcher plus aisément, selon une
            étude et un témoignage diffusés ce lundi par l’école polytechnique
            fédérale de Lausanne.
          </p>
          <p className="articles-link">Voir plus</p>
        </article>
      </section>
    </>
  );
}
export default Articles;
