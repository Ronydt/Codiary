import { Link } from "react-router-dom";
import { CardArticle } from "./CardArticle";

export function DailyArticles() {
  return (
    <section className="flex flex-col space-y-5">
      <header className="text-sm text-blackText/50">
        <h1>OUT 2025</h1>
      </header>

      <main className="flex flex-col space-y-2">
        <Link to="/ronydt/05OUT25">
          <CardArticle day="05" title="Domingo de descanso ativo" />
        </Link>

        <Link to="/ronydt/04OUT25">
          <CardArticle
            day="04"
            title="Primeiro post, e chegada do meu monitor"
          />
        </Link>
      </main>
    </section>
  );
}
