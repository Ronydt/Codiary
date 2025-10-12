import { IdentificationPost } from "@components/ui/IdentificationPost";
import { PostComment } from "@components/ui/PostComment";
import { PostHeader } from "@components/ui/PostHeader";
import { PostSection } from "@components/ui/PostSection";

export default function D11() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader date="11 OUT 2025" />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="Criação da página inicial para o BS" />

        <PostSection sectionTitle="Resumo do dia" twMarginTop="mt-20">
          <p>
            Agora são 23:49, cheguei de Jadynha há poco tempo e ainda quero
            estudar backend serverless na AWS com Serverless Framework (IaC),
            então vou optar por escrever o posr amanhã.
          </p>
        </PostSection>

        <PostComment
          comment="Devagarzinho a gente consegue as coisas, é melhor ir aos
          poucos de que ficar parado. Porém, sempre é bom se esforçar ao máximo,
          em tudo que for fazer dê o seu melhor!"
          twMarginTop="mt-20"
        />
      </main>
    </section>
  );
}
