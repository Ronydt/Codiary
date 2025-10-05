import { CardGoal } from "./CardGoal";

export function Goals() {
  return (
    <section className="flex flex-col max-w-80 space-y-4 pr-2 text-sm text-blackText">
      <CardGoal title="Finalizar o projeto Foodiary" />
      <CardGoal title="Atingir 10k líquido" />
      <CardGoal title="Atingir a fluência em inglês" />
      <CardGoal title="Gerar receita com meu Saas" />
      <CardGoal title="Mudar de apartamento" />
    </section>
  );
}
