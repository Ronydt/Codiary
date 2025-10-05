interface ICodeElement {
  element: string;
}

export function CodeElement({
  element = "Adicione seu CodeElement",
}: ICodeElement) {
  return (
    <code className="bg-black/10 px-1.5 py-0.5 rounded-sm">{element}</code>
  );
}
