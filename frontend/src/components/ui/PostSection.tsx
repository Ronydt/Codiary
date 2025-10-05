interface IPostSection {
  sectionTitle: string;
  children: React.ReactNode;
  twMarginTop?: string;
}

export function PostSection({
  sectionTitle = "Adicione um título para sua sessão",
  children,
  twMarginTop,
}: IPostSection) {
  return (
    <section className={`flex flex-col space-y-6 ${twMarginTop}`}>
      <h1 className="font-poppins-semiBold text-lg">{sectionTitle}</h1>
      <main className="flex flex-col space-y-4">{children}</main>
    </section>
  );
}
