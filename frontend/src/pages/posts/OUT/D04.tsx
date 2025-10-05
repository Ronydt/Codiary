import { CodeElement } from "@components/ui/CodeElement";
import { IdentificationPost } from "@components/ui/IdentificationPost";
import { PostComment } from "@components/ui/PostComment";
import { PostHeader } from "@components/ui/PostHeader";
import { PostSection } from "@components/ui/PostSection";

export default function D04() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader date="04 OUT 2025" />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="Primeiro post, e chegada do meu monitor" />

        <PostSection sectionTitle="Resumo do dia" twMarginTop="mt-20">
          <p>
            Acho que a principal coisa do dia de hoje foi a chegada do meu novo
            monitor (GS27QA). Fiquei muito feliz com isso, o que me deu um gás
            ainda maior para que eu continuasse com meus estudos e não
            desistisse dos meus sonhos e metas. De resto, a maioria das coisas
            seguiram como de costume. Nos meus estudos de programação iniciei a
            aula #05 do Foodiary.
          </p>
        </PostSection>

        <PostComment
          twMarginTop="mt-20"
          comment="Este é o meu primeiro dia escrevendo no Codiary, ainda não sei
          sobre o que escrever exatamente, mas estou feliz por começar, e curioso
          para ver minha evolução futuramente."
        />

        <PostSection sectionTitle="O que aprendi hoje?" twMarginTop="mt-20">
          <p>
            Enquanto finalizava as telas do Codiary, me deparei com a seguinte
            dúvida: Qual método de rota usar na minha aplicação? Seria melhor
            usar uma tag <CodeElement element="a" />, um{" "}
            <CodeElement element="Button" /> ou um{" "}
            <CodeElement element="Link" /> do React Router Dom?
          </p>

          <p>
            Para escolher a melhor opção, precisamos analisar o contexto da
            situação, já que temos alguns cenários favoráveis para cada um dos
            elementos.
          </p>

          <div className="mt-8 mb-12 space-y-5">
            <p>
              <CodeElement element="a" /> é usado para levar à rotas fora da
              nossa aplicação.
            </p>
            <p>
              <CodeElement element="Button" /> é usado quando temos alguma ação
              de botão envolvida, como um onClick.
            </p>
            <p>
              <CodeElement element="Link" /> vem do React Router Dom e é usado
              quando queremos navegar entre as rotas da nossa aplicação sem
              gerar carregamentos desnecessários que possam comprometer
              performance.
            </p>
          </div>

          <p>
            No meu caso em específico, optei por usar o{" "}
            <code className="bg-black/10 px-1.5 py-0.5 rounded-sm">Link</code>
          </p>
        </PostSection>

        <PostSection sectionTitle="Sobre os estudos" twMarginTop="mt-20">
          <p>
            Hoje eu praticamente não estudei conteúdos novos, o que fiz foi
            focar em desenvolver algumas telas e componentes aqui do Codiary.
            Além disso, também usei meu tempo para ficar com meu grande amor,
            passando um tempo de qualidade e aproveitando o sábado.
          </p>
        </PostSection>

        <PostSection sectionTitle="Agradecimentos" twMarginTop="mt-20">
          <p>
            Fico feliz que tenha chegado até aqui, gostaria de agradecer pelo
            seu tempo! Sei que o post de hoje foi um pouco curto, mas tenho que
            certeza que eles irão melhorar com o passar do tempo. Nos vemos
            novamente amanhã... Ah, provavelmente vou adicionar uma sessão para
            meu estudo de idiomas. Boa noite!
          </p>
        </PostSection>
      </main>
    </section>
  );
}
