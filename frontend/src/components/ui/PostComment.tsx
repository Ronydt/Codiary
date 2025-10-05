interface IPostComment {
  comment: string;
  twMarginTop?: string;
}

export function PostComment({
  comment = "Adicione seu comentário aqui",
  twMarginTop,
}: IPostComment) {
  return (
    <section className={`border border-black/20 rounded-lg p-6 ${twMarginTop}`}>
      <div className="flex flex-col space-y-4">
        <h1 className="font-poppins-semiBold"># Comentário</h1>
        <main>{comment}</main>
      </div>
    </section>
  );
}
