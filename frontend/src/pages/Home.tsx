import { DailyArticles } from "../components/ui/DailyArticles";
import { Goals } from "../components/ui/Goals";
import { IdentificationProfile } from "../components/ui/IdentificationProfile";
import { ProfileHeader } from "../components/ui/ProfileHeader";

export default function Home() {
  return (
    <section className="flex flex-col items-center min-h-lvh text-blackText font-poppins-regular">
      <ProfileHeader />

      <main className="w-full max-w-200 space-y-20 my-24">
        <section className="flex flex-row justify-between gap-10">
          <IdentificationProfile />
          <Goals />
        </section>

        <DailyArticles />
      </main>
    </section>
  );
}
