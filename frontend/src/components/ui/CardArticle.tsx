interface ICardArticle {
  day: string;
  title: string;
}

export function CardArticle({
  day = "00",
  title = "Add a title to your card",
}: ICardArticle) {
  return (
    <div className="flex flex-row items-center justify-between h-16 border border-black/20 rounded-lg px-8 hover:bg-black/4 transition-colors duration-300">
      <span className="font-poppins-semiBold">
        #D{day} <span className="font-poppins-regular">- {title}</span>
      </span>
      <span className="text-sm text-blackText/50">Acessar dia</span>
    </div>
  );
}
