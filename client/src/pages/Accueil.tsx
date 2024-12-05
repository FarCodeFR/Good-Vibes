import Articles from "../components/Articles";
import "../style/globals.css";

function Accueil() {
  return (
    <>
      <main>
        <section className="home-articles">
          <Articles />
          <Articles />
          <Articles />
          <Articles />
          <Articles />
          <Articles />
        </section>
      </main>
    </>
  );
}

export default Accueil;
