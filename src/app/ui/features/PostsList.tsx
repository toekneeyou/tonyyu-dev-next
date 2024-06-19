import { decode } from "html-entities";
import Link from "next/link";
import { Post } from "@/app/types/post";
import { classNames } from "@/app/lib/utils";

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
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
              <h3 className="font-bold md:text-2xl">{title}</h3>
              <p className="capitalize text-app-fog text-[12px]">
                {dateString} - {p.categories.join(", ")}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
