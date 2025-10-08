import { IdentificationPost } from "@components/ui/IdentificationPost";
import { PostComment } from "@components/ui/PostComment";
import { PostHeader } from "@components/ui/PostHeader";
import { PostSection } from "@components/ui/PostSection";

export default function D07() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader date="07 OUT 2025" />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="Ensinando inglês pra Clarinha" />

        <PostSection sectionTitle="Resumo do dia" twMarginTop="mt-20">
          <p>
            Primeiro de tudo, gostaria de dizer que estou feliz por ter começado
            a ensinar inglês para minha cunhadinha, ela tem 7 anos e hoje eu
            comecei a ensinar inglês para ela atrás do método que estou usando,
            por associação, não por tradução.
          </p>
          <p>
            No geral, o dia de hoje foi como em todos os outros, sinceramente,
            eu não vejo evolução, mas como aprendi com o livro "Hábitos
            Atômicos", a evolução leva tempo, o "grande momento" acontece quando
            menos esperamos, porém, ele é resultado de pequenos esforços
            anteriores. Enfim, pratiquei meu listening pela manhã, estudei
            programação com a live #05 de criação da API do Foodiary, ainda não
            li (vou ler agora na hora de dormir), durante o almoço assisti um
            vídeo de como aprender idiomas usando o chatGPT e métodos mais
            modernos. À tarde, dormi um pouco após o almoço (o meu corpo estava
            cansado, mas não deveria ter dormido), fui â academia logo após e à
            noite fui para a casa do meu grande amor, cheguei agora há pouco e
            já corri para escrever o post de hoje.
          </p>
        </PostSection>

        <PostSection sectionTitle="O que aprendi hoje?" twMarginTop="mt-20">
          <p>
            Durante meus estudos em programação pude aprender a estrutar o
            CognitoAuthorizer diretamente pelo Serverless Framework da forma
            correta e logo após aprendi a criar rotas privadas passando pelo
            authorizer, logo mais eu trarei meu primeiro post técnico sobre
            rotas privadas na aws usando cognito.
          </p>
        </PostSection>

        <PostSection sectionTitle="Estudos e projetos" twMarginTop="mt-20">
          <p>
            Em relação aos estudos de inglês eu pude aprender um método eficaz
            de 6 meses que irei testar e verificar se funciona, ele consta em
            fazer basicamente tudo que eu falei no post de ontem. Já estou com
            meu plano de ação e vou estudar com esse método por 6 meses focados,
            estudarei todos os dias. O foco inicial é aprender as 300 palavras
            mais usadas no inglês através de associação e contextos.
          </p>

          <p>
            Em relação aos meus projetos, hoje comecei a desenvolver uma página
            para a "Exclusivo" que servirá como um e-commerce um pouco
            diferente, além de que vai virar um criativo para as redes sociais
            da dtcode.
          </p>
        </PostSection>

        <PostSection sectionTitle="English paragraph" twMarginTop="mt-20">
          <p>
            Today at the morning (i don't know if the sentence are correctly) i
            pratice my listening with a videos on youtube and musics (Don
            toliver). After this post i'll study one more time to imporve my
            vocabulary.
          </p>
        </PostSection>

        <PostSection sectionTitle="Minhas leituras" twMarginTop="mt-20">
          <p>
            Ainda não fiz minha leitura do dia, sei que sempre é bom ler nos
            mesmos horários para criar o hábito da leitura, porém, hoje acabou
            que o meu horário para realizar a leitura vai ser agora à noite
            antes de dormir.
          </p>
        </PostSection>

        <PostSection sectionTitle="Agradecimentos" twMarginTop="mt-20">
          <p>
            Gostaria de agradecer mais uma vez pelo seu tempo, obrigado por
            estar mais um dia aqui comigo, fico feliz que esteja gostando dos
            posts. Amanhã tem mais, boa noite!
          </p>
        </PostSection>

        <PostComment
          comment="Acabei de ver meu Github, estou orgulho por ver que ele já está começando a tomar forma com alguns quadradinhos verdes 😍."
          twMarginTop="mt-20"
        />
      </main>
    </section>
  );
}
