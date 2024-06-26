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
      className={classNames("pb-24", "lg:pb-0 lg:relative lg:z-10")}
    >
      <div className={classNames("centered py-24", "lg:py-32")}>
        <H1>LATEST POSTS</H1>
      </div>

      <div
        className={classNames(
          "space-y-24",
          "lg:bg-app-black lg:space-y-32 lg:pt-32 lg:pb-64"
        )}
      >
        <div className="centered">
          <BlogList posts={posts} />
        </div>

        <div className="centered">
          <StyledLink isNextLink={true} nextLinkProps={{ href: "/blog" }}>
            <span className="font-bold mr-2">Go to Blog</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </StyledLink>
        </div>
      </div>
    </section>
  );
}
