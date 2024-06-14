import { Metadata } from "next";
import { classNames } from "../lib/utils";
import { josefin } from "../ui/fonts";
import Input from "../ui/components/Input";
import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";
import { getPosts } from "../lib/wordpressApi";
import IconButton from "../ui/components/IconButton";
import BlogList from "../ui/features/BlogList";

export const metadata: Metadata = {
  title: "Tony Yu - Blog",
};

export default async function Blog() {
  const posts = (await getPosts(5)) ?? [];

  return (
    <main className="py-28 space-y-8 px-4">
      <div className="centered">
        <h1
          className={classNames(
            josefin.className,
            "text-4xl font-bold self-start text-center"
          )}
        >
          Blog
        </h1>
      </div>
      <div className="py-4 space-x-4 flex items-center">
        <Input
          placeholder="Search"
          icon={faSearch}
          containerClass="flex-grow"
        />
        <IconButton aria-label="Open Filters" icon={faSliders} />
      </div>
      <BlogList posts={posts} />
    </main>
  );
}
