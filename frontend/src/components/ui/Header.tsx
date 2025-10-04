export function Header() {
  return (
    <header className="relative flex flex-row items-center justify-between w-full h-25 px-20">
      <span className="w-40">Codiary</span>

      <span className="text-center">
        “Last post - Dia de aprendizado Serverless com AWS”
      </span>

      <a
        href="https://github.com/Ronydt/Codiary"
        target="_blank"
        rel="noopener noreferrer"
        className="w-40 text-end"
      >
        Github repository
      </a>
    </header>
  );
}
