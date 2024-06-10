import { BLOG_SECTION } from "@/app/lib/id";
import H1 from "../components/H1";
import StyledLink from "../components/StyledLink";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPosts } from "@/app/lib/wordpressApi";
import BlogList from "./BlogList";

export default async function BlogSection() {
  const posts = (await getPosts(3)) ?? [];
  return (
    <section id={BLOG_SECTION} className="py-12 space-y-12">
      <H1>BLOG</H1>
      <BlogList posts={posts} />
      <div className="centered">
        <StyledLink isNextLink={true} nextLinkProps={{ href: "/blog" }}>
          <span className="font-bold mr-2">Go to Blog</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </StyledLink>
      </div>
    </section>
  );
}
