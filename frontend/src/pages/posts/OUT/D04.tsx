import { IdentificationPost } from "../../../components/ui/IdentificationPost";
import { PostComment } from "../../../components/ui/PostComment";
import { PostHeader } from "../../../components/ui/PostHeader";
import { PostSection } from "../../../components/ui/PostSection";

export default function D04() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="Primeiro post e chegada do meu monitor" />

        <PostSection sectionTitle="Resumo do dia" twMarginTop="mt-20">
          <span>
            Acho que a principal coisa do dia de hoje foi a chegada do meu novo
            monitor (GS27QA). Fiquei muito feliz com isso, o que me deu um gás
            ainda maior para que eu continuasse com meus estudos e não
            desistisse dos meus sonhos e metas. De resto, a maioria das coisas
            seguiram como de costume. Nos meus estudos de programação iniciei a
            aula #05 do Foodiary.
          </span>
        </PostSection>

        <PostComment
          twMarginTop="mt-20"
          comment="Este é o meu primeiro dia escrevendo no Codiary, ainda não sei
          sobre o que escrever exatamente, mas estou feliz por começar, e curioso
          para ver minha evolução futuramente."
        />

        <PostSection sectionTitle="O que aprendi hoje?" twMarginTop="mt-20">
          <span>
            Hoje, enquanto finalizava as telas do Codiary, me deparei com a
            seguinte dúvida, "qual método de rota usar na minha aplicação? Seria
            melhor usar uma tag a, um button ou um Link do React Router Dom?".
          </span>

          <span>
            Para escolher corretamente precisamos fazer uma análise do nosso
            "problema", já que temos alguns cenários favoráveis para cada um dos
            elementos! Já adianto que no meu caso o melhor foi fazer o uso do
            Link.
          </span>
        </PostSection>
      </main>
    </section>
  );
}
