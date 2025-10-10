import { IdentificationPost } from "@components/ui/IdentificationPost";
import { PostHeader } from "@components/ui/PostHeader";
import { PostSection } from "@components/ui/PostSection";

export default function D09() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader date="09 OUT 2025" />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="Início dos meus estudos em inglês rumo à fluência" />

        <PostSection sectionTitle="Resumo do dia" twMarginTop="mt-20">
          <p>
            Agora são 23:47, vou iniciar a escrita do post de hoje, mas só vou
            finalizar ele de fato amanhã.
          </p>
        </PostSection>
      </main>
    </section>
  );
}
