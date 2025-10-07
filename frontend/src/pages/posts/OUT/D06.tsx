import { IdentificationPost } from "@components/ui/IdentificationPost";
import { Markup } from "@components/ui/Markup";
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
          <p>
            O dia de hoje foi bem produtivo, logo pela manhã eu li um capítulo
            do livro "Hábitos Atômicos" do James Cler, estudei um pouco de AWS
            com a aula #05 da API do Foodiary, fiz os passos do método
            "Aprendendo inglês de forma natural como uma crinça faria". Não
            estudei programação tanto quanto deveria, mas o importante é que
            estudei um pouco.
          </p>
          <p>
            Estou finalizando o post na manhã do dia 07. Escrevi a maior parte
            dele ontem, porém, não consegui finalizá-lo, estava muito cansado,
            deveria ter finalizado, mas falhei com isso.
          </p>
        </PostSection>

        <PostComment
          twMarginTop="mt-20"
          comment="Eu vou escrevendo o post ao longo do dia, mas caso não consiga,
          à noite eu volto e documento tudo certinho, pode ficar tranquilo.
          (só voltei no outro dia 😕)."
        />

        <PostSection sectionTitle="O que aprendi hoje?" twMarginTop="mt-20">
          <p>
            Hoje, tive o prazer de aprender como analisar meus hábitos e
            separa-los em bons ou ruins, o que me fez dar mais um passo à favor
            de quem quero me tornar. Já em programação, embora tenha estudado um
            pouco de Serverless na AWS, não consegui aprender muita coisa além
            da teoria sobre rotas protegidas (no meu caso, protegidas com o
            cognito authorizer).
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

        <PostSection sectionTitle="English paragraph" twMarginTop="mt-20">
          <p>
            It's my first english paragraph. Today i learn how to improve my
            english like a baby. In gym i listened podcats like TED Talks and
            "English podcast" on spotify. (i need learn expressions to improve
            my vocabulary and my sentences). I know what this (this or there?)
            paragraph has (has or have?) some mistakes. See you.
          </p>
        </PostSection>

        <PostSection sectionTitle="Minhas leituras" twMarginTop="mt-20">
          <p>
            Com o capítulo "O homem que não parecia bem" que li hoje (59-66),
            pude aprender duas coisas.
          </p>
          <p>
            A primeira delas foi tornar meus hábitos mais conscientes para que
            eu possa futuramente mudar os maus hábitos e adicionar bons novos
            hábitos. Como fazer isso? É muito simples, basta criar uma lista com
            meus hábitos e depois marcá-los como neutros (=), bons (+) ou ruins
            (-).
          </p>

          <p>
            Uma observação importante a se fazer é,{" "}
            <Markup element="o que é um hábito ruim?" /> De forma simples, um
            mau hábito é aquele que nos afasta da pessoa que queremos nos
            tornar. Por exemplo, comer um pouco a mais pode ser um mau hábito
            para quem quer perder peso, mas um bom hábito para quem quer ganhar
            peso. Cabe a você perceber quais hábitos te levam ou te afastam do
            seu eu desejado.
          </p>

          <p>
            A segunda coisa que aprendi entra justamente nesse ponto, ela
            aparece para ajudar a perceber os hábitos no dia a dia, seu nome é{" "}
            <Markup element={`"apontar e falar"`} />. Ela é simplesmente
            perceber o que está fazendo de errado e falar em voz alta, junto com
            o que você deveria estar fazendo. Por exemplo, se eu estou deitado,
            mas deveria estar estudando, então eu falo "estou deitado
            procratinando, eu deveria estar estudando, pois é o que vai me fazer
            alcançar os meus objetivos.", isso ajuda a perceber o erro mais
            facilmente e nos incentiva a agir.
          </p>
        </PostSection>

        <PostSection sectionTitle="Agradecimentos" twMarginTop="mt-20">
          <p>
            Gostaria de agradecer mais uma vez pelo seu tempo, obrigado por
            estar mais um dia aqui comigo, fico feliz que esteja gostando dos
            posts. Amanhã tem mais, boa noite!
          </p>
        </PostSection>
      </main>
    </section>
  );
}
