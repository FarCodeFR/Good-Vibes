import Articles from "../components/Articles";
import MainArticle from "../components/MainArticle.tsx";
import "../style/globals.css";

function Accueil() {
  return (
    <>
      <main>
        <section className="home-articles">
          <MainArticle />
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
