import { IdentificationPost } from "@components/ui/IdentificationPost";
import { Markup } from "@components/ui/Markup";
import { PostHeader } from "@components/ui/PostHeader";
import { PostSection } from "@components/ui/PostSection";

export default function D08() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader date="08 OUT 2025" />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="Início dos meus estudos em inglês rumo à fluência" />

        <PostSection sectionTitle="Resumo do dia" twMarginTop="mt-20">
          <p>
            Agora são 23:26, hoje o dia foi bem produtivo. Acordei às 05:10 e
            comecei a estudar às 06:00. Logo pela manhã estudei inglês por 1
            hora com meu método atual de aprendizado. Busquei Jadynha em casa
            para o trabalho, abri a loja e logo pela manhã eu já tinha terminado
            todas as tarefas do dia (ler, estudar programação, estudar inglês,
            ...)
          </p>
          <p>
            No período da tarde eu iniciei a ciração de uma Lading page que vai
            servir como catálogo para a loja Exclusivo. Confesso que fiquei
            bastante em dúvida do que usar em cada sessão, finalizei apenas a
            primeira (hero section), espero poder finalizar todo o protótipo
            amanhã. Em geral, foram essas coias que aconteceram no meu dia. A
            noite seguiu como sempre.
          </p>
        </PostSection>

        <PostSection sectionTitle="O que aprendi hoje?" twMarginTop="mt-20">
          <p>
            Hoje, apesar de ter aprendido um pouco mais sobre rotas privdas em
            uma API serverless usando o Cognito Authorizer, gostaria de destacar
            que pude aprender novas expressoões em inglês.
          </p>

          <p>
            A primeira delas foi <Markup element="It is has about..." /> (`iri
            has abaut`) que é usada quando estamos nos referindo a quantidade de
            habitantes que uma determinada cidade possui, o tamanho. Por
            exemplo, quando alguém perguntar "How big is Nova Cruz?" eu posso
            responder com "It is has about 40,000 people".
          </p>

          <p>
            A seguna foi <Markup element="Pretty big" /> (`pruiri big`), no
            contexto do diálogo, não entendi se isso significava que era uma
            cidade pequena ou uma cidade grande, acredito que tenha sido uma
            forma de dizer que a "cidade é pequena". O exemplo era assim: uma
            moça perguntava "Is Pasadena a big city?" e o rapaz respondia "it's
            pretty big" e depois ela perguntava "how big is 'pretty big'?" e daí
            vaoltávamos para a expressão que falei no parágrafo anterior.
          </p>
        </PostSection>

        <PostSection sectionTitle="Estudos e projetos" twMarginTop="mt-20">
          <p>
            Em relação aos estudos de inglês, estou usando um site chamado{" "}
            <a
              href="https://eslfast.com"
              className="underline text-blue-500 hover:text-blue-300 transition-colors duration-200"
              target="_blank"
            >
              eslfast.com
            </a>{" "}
            para realizar meu listening e aprender novas expressões com o
            contexto.
          </p>

          <p>
            Já em relação aos meus projetos, iniecei hoje o projeto do
            "semi-ecommerce" da loja Exclusivo. Ainda não vou adicionar fotos
            aqui, vou esperar finalizar o protótipo (que eu espero que seja
            amanhã 🤣).
          </p>
        </PostSection>

        <PostSection sectionTitle="English paragraph" twMarginTop="mt-20">
          <p>
            In this paragraph i will write fast beacuse now is 23:51 and i need
            push this post to github. So, i see you tomorow. Good noight.
          </p>
        </PostSection>

        <PostSection sectionTitle="Minhas leituras" twMarginTop="mt-20">
          <p>
            Sobre minha leitura de hoje, li mais um capítulo do livro "Hábitos
            Atoômicos" e no cap de hoje, eu pude aprender a criar um processo de
            empilhamento de hábitos, onde eu consigo melhorar adicionar algum
            hábito em sequência de um gatilho que já existe em minha, daí que
            entra o conhecimento adquirido no capítulo anterior. Amanhã falo
            detalhadamente sobre o assunto, agora estou com sono e vou dormir.
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
