import { classNames } from "@/app/lib/utils";
import { getPostBySlug } from "@/app/lib/wordpressApi";
import { josefin } from "@/app/ui/fonts";
import { decode } from "html-entities";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const title = decode(post.title);
  return (
    <main className="pt-16">
      <div className="centered py-8 px-4">
        <h1
          className={classNames(
            josefin.className,
            "text-4xl font-bold self-start mb-8 text-center"
          )}
        >
          {title}
        </h1>
      </div>
    </main>
  );
}
