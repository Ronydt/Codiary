import { Link } from "react-router-dom";
import { CardArticle } from "./CardArticle";

export function DailyArticles() {
  return (
    <section className="flex flex-col space-y-5">
      <header className="text-sm text-blackText/50">
        <h1>OUT 2025</h1>
      </header>

      <main className="flex flex-col space-y-2">
        <Link to="/ronydt/10OUT25">
          <CardArticle day="10" title="iPhone novo de Jadynha" />
        </Link>

        <Link to="/ronydt/09OUT25">
          <CardArticle day="09" title="Celular quebrado e novos clientes" />
        </Link>

        <Link to="/ronydt/08OUT25">
          <CardArticle
            day="08"
            title="Início dos meus estudos em inglês rumo à fluência"
          />
        </Link>

        <Link to="/ronydt/07OUT25">
          <CardArticle day="07" title="Ensinando inglês pra Clarinha" />
        </Link>

        <Link to="/ronydt/06OUT25">
          <CardArticle day="06" title="AWS e plano de estudos em inglês" />
        </Link>

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
