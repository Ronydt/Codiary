import { IdentificationPost } from "@components/ui/IdentificationPost";
import { PostComment } from "@components/ui/PostComment";
import { PostHeader } from "@components/ui/PostHeader";
import { PostSection } from "@components/ui/PostSection";

export default function D05() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader date="05 OUT 2025" />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="Um lindo domingo produtivo" />

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
      </main>
    </section>
  );
}
