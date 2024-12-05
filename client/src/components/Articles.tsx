import "../style/globals.css";

function Articles() {
  return (
    <>
      <figure className="articles-figure">
        <img src="src/assets/images/favicon.png" alt="" />
      </figure>
      <section>
        <h3 className="articles-hashtag">#Société </h3>
        <h4>
          Des chercheurs suisses redonnent espoir à des blessés à la moelle
          épinière
        </h4>
        <p>
          Un espoir pour certaines personnes atteintes de lésions de la moelle
          épinière : la stimulation profonde de certaines zones du cerveau par
          des électrodes pourrait les aider à marcher plus aisément, selon une
          étude et un témoignage diffusés ce lundi par l’école polytechnique
          fédérale de Lausanne.
        </p>
      </section>
      <p>Voir plus</p>
    </>
  );
}
export default Articles;
