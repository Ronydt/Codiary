import { IdentificationPost } from "@components/ui/IdentificationPost";
import { PostComment } from "@components/ui/PostComment";
import { PostHeader } from "@components/ui/PostHeader";
import { PostSection } from "@components/ui/PostSection";
import { PostTopic } from "@components/ui/PostTopic";

export default function D06() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader date="06 OUT 2025" />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="AWS e plano de estudos em inglês" />

        <PostSection sectionTitle="Resumo do dia" twMarginTop="mt-20">
          <p>O resumo do dia de hoje só será escrito à noite.</p>
        </PostSection>

        <PostComment
          twMarginTop="mt-20"
          comment="Eu vou escrevendo o post ao longo do dia, mas caso não consiga, à noite eu volto e documento tudo certinho, pode ficar tranquilo."
        />

        <PostSection sectionTitle="O que aprendi hoje?" twMarginTop="mt-20">
          <p>
            Este é um campo que só é finalizado no final do dia... posso ir
            aprendendo várias coisas e ir anotando aqui, porém, só pode ser
            finalizado à noite.
          </p>
        </PostSection>

        <PostSection sectionTitle="Estudos e projetos" twMarginTop="mt-20">
          <p>
            Ainda pela manhã, conversei com o chatGPT para criar um plano de
            estudos para melhorar meu inglês e chegar à fluêcia. O critério
            usado para realizar os meus estudos será "assim como um bebê aprende
            idioma com exposição e repetição à nova lingua de forma natural,
            quero criar um plano de estudos onde o foco seja aprender de forma
            natual, sem ter que me amarrar à gramática ou regras complexas do
            idioma". Com o plano de ação já criado, será necessário realizar 4
            tópicos diariamente:
          </p>

          <section className="flex flex-col  mt-10 space-y-10 border-l border-black/15 border-dashed pl-6">
            <PostTopic topic="1. Input compreensível">
              <p>
                Aqui, o objetivo é inundar o cérebro com inglês compreensível e
                interressante. Para isso, usaremos séries e vídeo com áudio e
                legenda em inglês. O foco aqui é repetir cenas curtas de 1 a 3
                minutos várias vezes, até entender quase tudo.
              </p>
            </PostTopic>

            <PostTopic topic={`2. Repetição e "Shadowing"`}>
              <p>
                Aqui, o objetivo é começar a treinar a pronúncia e a fala
                imitando padrões naturais. Para isso, vamos escolher um pequeno
                trecho de uma série ou vídeo para escutarmos até entender tudo,
                depois vamos repetir junto com o aúdio - imitando o ritmo,
                entonação e sotaque. Um passo extra é gravar-se, tanto para
                comparar com o original, quanto para acaompanhar sua jornada.
              </p>
            </PostTopic>

            <PostTopic topic="3. Interação real">
              <p>
                Aqui, o objetivo é usar o idioma naturalmente, sem tradução.
                Podemos fazer isso usando o chatGPT, entrando em sites próprios
                para isso ou em servidores do Discord.
              </p>
            </PostTopic>

            <PostTopic topic="4. Escrita natural">
              <p>
                Depois de muito input auditivo, a escrita virá quase
                naturalmente. Então, para praticar, todos os dias escreverei um
                parágrafo em inglês contando como foi meu estudo e coisas novas
                que aprendi no dia.
              </p>
            </PostTopic>
          </section>

          <PostComment
            twMarginTop="mt-14"
            comment="Dica científica: Quanto mais o cérebro ouve inglês sem
            tradução, mais ele cria conexões automáticas (sem que você precise
            pensar no seu idioma nativo)."
          />
        </PostSection>
      </main>
    </section>
  );
}
