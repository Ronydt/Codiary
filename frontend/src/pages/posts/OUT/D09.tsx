import { IdentificationPost } from "@components/ui/IdentificationPost";
import { Markup } from "@components/ui/Markup";
import { PostComment } from "@components/ui/PostComment";
import { PostHeader } from "@components/ui/PostHeader";
import { PostSection } from "@components/ui/PostSection";

import CONVERSATION_IMG2 from "@assets/images/09OUT25_ENGLISH_STUDY_CONVERSATION.webp";
import PROJECT_IMG1 from "@assets/images/09OUT25_EXCLUSIVE_PROJECT_IMG1.webp";
import PROJECT_IMG2 from "@assets/images/09OUT25_EXCLUSIVE_PROJECT_IMG2.webp";

export default function D09() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <PostHeader date="09 OUT 2025" />

      <main className="w-full max-w-200 my-20">
        <IdentificationPost postTitle="Celular quebrado e novos clientes" />

        <PostSection sectionTitle="Resumo do dia" twMarginTop="mt-20">
          <p>
            Agora são 23:47, vou iniciar a escrita do post de hoje, mas só vou
            finalizar ele de fato amanhã.
          </p>
          <p>
            Voltei... agora são 10:16 do dia 10. Vou escrever o post com a
            narração de ontem no presente, ou seja, usei termos como "hoje fiz
            tal coisa", "hoje pude aprender...". Dado esse desclaimer, vou
            iniciar o post agora (inclusive o parágrafo abaixo).
          </p>
          <p>
            Bom, no dia de hoje aconteceram algumas coisas marcantes. Minha
            namorada deixou cair o celular dela e acabou rachando na lateral,
            ela usava um iPhone XR, que agora não está ligando mais. Ela já
            estava com planos de trocar de celular, agora vai ter que trocar
            mesmo! Enqunto ela não compra o celular novo, deixei o meu reserva
            com ela, é um Galaxy S9+ (eu sei, ele está antiguinho, mas ainda
            funciona muito bem).
          </p>
          <p>
            Outa coisa marcante foi que voltei a entrar em contato com algumas
            empresas e marcas para desenvolver páginas empresarias profissionais
            com foco em conversão e aumento da autoridade da empresa no digital.
            Algumas pessoas gostaram do que apresentei e acredito que eu consiga
            fechar com elas.
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
            Durante meus estudos de inglês que ocorrem pela manhã, durante 1h,
            pude aprender algumas expressões novas como{" "}
            <Markup element={`"it's so pretty old now"`} />,
            <Markup element={`"but it still looks good."`} />,{" "}
            <Markup element={`"Twice a year"`} /> e algumas outras.
          </p>

          <img
            src={CONVERSATION_IMG2}
            alt="CONVERSATION_IMG2"
            className="mt-5"
          />

          <p className="mt-10">
            Em relação oas meus projetos, o protótipo da página da Exclusivo que
            eu tinha iniciado ontem, está praticamente finalizada. Criei uma boa
            Hero Section, adicionei um banner de "Faça seu pedido" e apresentei
            as marcas com as quais trabalhamos.
          </p>

          <section className="flex flex-col items-center justify-center overflow-hidden space-y-3 mt-5">
            <img src={PROJECT_IMG1} alt="CONVERSATION_IMG2" />
            <img src={PROJECT_IMG2} alt="CONVERSATION_IMG2" />
          </section>
        </PostSection>

        <PostSection sectionTitle="Paragraph in english" twMarginTop="mt-20">
          <p>
            Today it's my second day studing with a "baby" english method. I
            learned <Markup element={`"What kind of a car do you have?"`} />,
            <Markup element={`"So, it's pretty old now"`} /> and{" "}
            <Markup element={`"Yes, it is. But it still looks good"`} />, and
            finaly i learned how to use <Markup element={`"twice a year"`} />.
          </p>
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
