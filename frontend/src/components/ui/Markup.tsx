interface IMarkup {
  element: string;
}

export function Markup({ element = "Adicione seu Markup" }: IMarkup) {
  return <span className="font-poppins-semiBold">{element}</span>;
}
