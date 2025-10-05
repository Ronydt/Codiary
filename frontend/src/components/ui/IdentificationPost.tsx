import { LucideForward } from "lucide-react";

interface IIdentificationPost {
  postTitle: string;
}

export function IdentificationPost({
  postTitle = "Adicione um título para o seu post",
}: IIdentificationPost) {
  function handleSharePost() {
    alert("Enviou o texto");
  }

  return (
    <section className="flex flex-col">
      <span className="text-[15px]">#Ronydt</span>
      <h1 className="text-3xl font-poppins-bold mt-1">{postTitle}</h1>

      <button
        onClick={handleSharePost}
        className="flex flex-row items-center gap-2 mt-5 pr-2 w-fit text-blackText/50 hover:text-blackText transition-colors duration-150"
      >
        <span className="text-[15px]">Compartilhar post</span>
        <LucideForward size={18} />
      </button>
    </section>
  );
}
