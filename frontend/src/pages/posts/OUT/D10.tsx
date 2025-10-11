import { IdentificationPost } from "@components/ui/IdentificationPost";
import { PostComment } from "@components/ui/PostComment";
import { PostHeader } from "@components/ui/PostHeader";
import { PostSection } from "@components/ui/PostSection";

export default function D10() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader date="10 OUT 2025" />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="iPhone novo de Jadynha" />

        <PostSection sectionTitle="Resumo do dia" twMarginTop="mt-20">
          <p>
            O dia de hoje foi bem parado, agora sã0 18:36 e ainda não estudei
            programação, poderia ter estudado na loja, porém, fiquei fazendo
            outras coisas e acabou que não estudei ainda, quando chegar da casa
            de Jady irei estudar.
          </p>
          <p>
            Consegui entrar em contato com alguns possíveis clientes e espero
            poder fechar pelo menos um projeto até a próxima semana.
          </p>
          <p>
            A grande notícia do dia é que meu grande amor comprou um celular
            novo, um iPhone 15 azul (ele é um azul bem claro, quase que um
            branco), achei ele muito muito lindo.
          </p>
        </PostSection>

        <PostComment
          comment="Lembrando que minha meta até o final do ano é conseguir
        juntar dinheiro para mudar para um apartamento e ser 100% independente"
          twMarginTop="mt-20"
        />

        <PostSection sectionTitle="O que aprendi hoje?" twMarginTop="mt-20">
          <p>
            Em relação à programação, aprendi ainda mais sobre rotas privadas
            com o cognito, além de aprender que a melhor forma de validar o id
            do usuário não é ficando batendo no DB e consultando o externalId
            (ID do Cognito - UUId) pra depois voltar na minha aplicação e
            verificar o internalId (ID interno do meu usuáario - KSUID). A
            melhor abordagem é já salvar o externalId no meu DB junto com as
            informações dutante o SignUp, assim eu economizo recursos
            computacionais, diminuo os custos da aplicação e não fico amarrado
            aos serviços do Cognito, caso eu queira mudar de provider
            futuramente e definir os mesmos IDs dos usuários. Dessa forma, eu
            consigo fazer isso livremente.
          </p>
        </PostSection>

        <PostSection sectionTitle="Estudos e projetos" twMarginTop="mt-20">
          <p>
            Em programação ainda irei realizar meus estudos, já em inglês,
            estudei mais um diálogo que me fez aprender algumas novas
            expressões.
          </p>

          <p className="mt-10">
            Em relação oas meus projetos, o projeto exclusivo continua do mesmo
            jeito, não adicionei nenhuma sessão nova ao projeto. estou com
            planos de adicionar algumas funcionalidades novas aqui no Codiary e
            procurar uma forma de melhorar a forma como subo os projetos e
            tentar criar uma plataforma completa, onde eu possa fazer o login e
            criar meus posts dinamicamente por ela. E também quero criar um
            contador de clientes, projetos e capital adquirido.
          </p>
        </PostSection>

        <PostSection sectionTitle="Paragraph in english" twMarginTop="mt-20">
          <p>I write this paragraph after leeve jady home.</p>
        </PostSection>

        <PostSection sectionTitle="Paragraph in english" twMarginTop="mt-20">
          <p>
            Agradeço mais uma vez por ter disponibilizado uma parte do seu dia
            para ler este post. Sei que meus parágrafos em inglês estão
            melhorando devagarzinho, e por mim, não há problema nisso. Enfim,
            espero te ver por aqui novamente amanhã.
          </p>
        </PostSection>
      </main>
    </section>
  );
}
