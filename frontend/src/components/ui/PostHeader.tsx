import { LucideChevronLeft, LucideStar } from "lucide-react";
import { Link } from "react-router-dom";

interface IPostHeader {
  date: string;
}

export function PostHeader({
  date = "Adicione a data do post (03 SET 2005)",
}: IPostHeader) {
  return (
    <header className="flex flex-row items-center justify-between w-full h-25 px-20 font-poppins-semiBold">
      <Link to="/">
        <div className="flex flex-row items-center gap-1.5 w-44 hover:text-blackText/50 transition-colors duration-200">
          <LucideChevronLeft size={18} />
          <span className="text-[15px]">Rony Domingos</span>
        </div>
      </Link>

      <span className="text-sm text-center text-[15px] font-poppins-regular text-blackText/50">
        {date}
      </span>

      <a
        href="https://github.com/Ronydt/Codiary"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-end gap-2 w-44 text-sm hover:text-blackText/50 transition-colors duration-200"
      >
        Github repository
        <LucideStar size={18} />
      </a>
    </header>
  );
}
