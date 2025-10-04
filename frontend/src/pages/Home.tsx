import { DailyArticles } from "../components/ui/DailyArticles";
import { Header } from "../components/ui/Header";
import { Identification } from "../components/ui/Identification";

export default function Home() {
  return (
    <section className="flex flex-col items-center min-h-lvh">
      <Header />

      <main className="w-full max-w-200 space-y-20 mt-24">
        <Identification />
        <DailyArticles />
      </main>
    </section>
  );
}
