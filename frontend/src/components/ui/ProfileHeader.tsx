import { LucideStar } from "lucide-react";

export function ProfileHeader() {
  return (
    <header className="flex flex-row items-center justify-between w-full h-25 px-20">
      <span className="w-44 font-poppins-semiBold">Codiary</span>

      <span className="text-sm text-center text-[15px]">
        <span className="font-poppins-semiBold">Mais recente</span> - "Ensinando
        inglês pra Clarinha”
      </span>

      <a
        href="https://github.com/Ronydt/Codiary"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-end gap-2 w-44 font-poppins-semiBold text-sm hover:text-blackText/50 transition-colors duration-200"
      >
        Github repository
        <LucideStar size={18} />
      </a>
    </header>
  );
}
