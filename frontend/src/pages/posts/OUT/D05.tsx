import { IdentificationPost } from "@components/ui/IdentificationPost";
import { PostComment } from "@components/ui/PostComment";
import { PostHeader } from "@components/ui/PostHeader";
import { PostSection } from "@components/ui/PostSection";

export default function D05() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader date="05 OUT 2025" />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="Domingo de descanso ativo" />

        <PostSection sectionTitle="Resumo do dia" twMarginTop="mt-20">
          <p>
            Eae, bom dia! Tudo bem? Agora são 10:12 de um lindo domingo. Os meus
            planos para hoje são: atualizar meu portfólio, estudar a live #05 da
            API do Foodiary e adicionar algumas coisas novas aqui no Codiary.
          </p>
          <p>
            Até agora, eu já tomei café da manhã (uma tapioca de carne moída e
            uma vitamina de morango), refatorei e melhorei alguns códigos aqui
            do Codiary que já vou subir para o Github e vou pôr minha roupa para
            ir à academia.
          </p>
        </PostSection>

        <PostComment
          twMarginTop="mt-20"
          comment="Eu vou escrevendo o post ao longo do dia, mas caso não consiga, à noite eu volto e documento tudo certinho, pode ficar tranquilo."
        />

        <PostSection sectionTitle="O que aprendi hoje?" twMarginTop="mt-20">
          <p>
            Acabou que não aprendi nada novo sobre programação hoje, apenas tive
            algumas ideias que botarei em prática amanhã.
          </p>
        </PostSection>

        <PostSection sectionTitle="Estudos e projetos" twMarginTop="mt-20">
          <p>
            Sobre meus estudos e projetos, não concluí os planos que tinha para
            hoje, aproveitei o domingo para descansar ao lado da minha namorada.
            Além das coisas que fiz pela manhã, estudei um pouco de backend com
            a aula #05 da API do Foodiary, porém, nada muito aprofundado.
          </p>
        </PostSection>

        <PostComment
          twMarginTop="mt-20"
          comment="Futuramente pretendo adicionar pipelines de CI/CD para melhorar a forma como faço o deploy dos posts, já que eles estão hardcode, sem uma API por trás."
        />

        <PostSection sectionTitle="Agradecimentos" twMarginTop="mt-20">
          <p>
            Mais uma vez, obrigado por ter lido até aqui, agradeço pelo seu
            tempo, o post de hoje foi curto, amanhã voltarei com tudo! Boa
            noite!
          </p>
        </PostSection>
      </main>
    </section>
  );
}
