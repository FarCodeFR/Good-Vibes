import { useLoaderData } from "react-router-dom";
import Articles from "../components/Articles";
import MainArticle from "../components/MainArticle.tsx";
import "../style/globals.css";

interface Article {
  id: number;
  keyword: string;
  title: string;
  image: string;
  article: string;
}

function Accueil() {
  const data = useLoaderData() as Article[];

  return (
    <>
      <main>
        <section className="home-articles">
          <MainArticle />
          <hr className="tiret-accueil" />
<<<<<<< HEAD
          <div className="scroll-articles">
            {data?.map((element) => {
              return (
                <Articles
                  key={element.id}
                  keyword={element.keyword}
                  image={element.image}
                  article={element.article}
                  title={element.title}
                />
              );
            })}
          </div>
=======
          <article className="scroll-articles">
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
          </article>
>>>>>>> 9162a2331c825359071265f251a57dc97405da64
        </section>
      </main>
    </>
  );
}

export default Accueil;
