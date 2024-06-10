import { classNames } from "@/app/lib/utils";
import { Post } from "@/app/lib/wordpressApi";
import { decode } from "html-entities";
import Link from "next/link";

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <ul className="px-4 space-y-9">
      {posts.map((p) => {
        const title = decode(p.title);
        const dateString = new Date(p.date).toLocaleDateString();
        const href = `/blog/${p.slug}`;

        return (
          <li key={title} className={classNames("flex items-center ")}>
            <div
              role="none"
              className="bg-turquoise min-h-4 min-w-4 rounded-full mr-4"
            />

            <Link href={href}>
              <h3 className="font-bold">{title}</h3>
              <p className="capitalize text-light-gray text-[12px]">
                {dateString} - {p.categories.join(", ")}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
