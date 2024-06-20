import { LATEST_POSTS } from "@/app/lib/id";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPosts } from "@/app/lib/wordpressApi";
import BlogList from "../../PostsList";
import { classNames } from "@/app/lib/utils";
import H1 from "@/app/ui/components/H1";
import StyledLink from "@/app/ui/components/StyledLink";

export default async function LatestPosts() {
  const posts = (await getPosts(3)) ?? [];

  return (
    <section
      id={LATEST_POSTS}
      className={classNames(
        "py-12 space-y-12",
        "lg:relative lg:z-10 lg:bg-app-black lg:pt-40 lg:pb-0 lg:space-y-32"
      )}
    >
      <div className="centered">
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
