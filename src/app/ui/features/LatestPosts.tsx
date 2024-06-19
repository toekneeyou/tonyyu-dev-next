import { LATEST_POSTS } from "@/app/lib/id";
import H1 from "../components/H1";
import StyledLink from "../components/StyledLink";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPosts } from "@/app/lib/wordpressApi";
import BlogList from "./BlogList";
import { classNames } from "@/app/lib/utils";

export default async function LatestPosts() {
  const posts = (await getPosts(3)) ?? [];

  return (
    <section
      id={LATEST_POSTS}
      className={classNames(
        "py-12 space-y-12",
        "md:relative md:z-10 md:bg-app-black md:pt-40 md:pb-0 md:space-y-32"
      )}
    >
      <div>
        <H1>LATEST POSTS</H1>
      </div>
      <div className="centered">
        <BlogList posts={posts} />
      </div>
      <div className="centered">
        <StyledLink isNextLink={true} nextLinkProps={{ href: "/blog" }}>
          <span className="font-bold mr-2">Go to Blog</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </StyledLink>
      </div>
    </section>
  );
}
