interface IPostTopic {
  topic: string;
  children: React.ReactNode;
  twMarginTop?: string;
}

export function PostTopic({
  topic = "Add a topic title",
  children,
  twMarginTop,
}: IPostTopic) {
  return (
    <section className={`flex flex-col space-y-3 ${twMarginTop}`}>
      <h1 className="font-poppins-semiBold">{topic}</h1>
      <p className="flex flex-col space-y-4">{children}</p>
    </section>
  );
}
