const WORDPRESS_API_URL =
  "https://public-api.wordpress.com/wp/v2/sites/tonyyucms.wordpress.com";

export interface Post {
  id: string;
  date: string;
  slug: string;
  title: string;
  content: string;
  classList: string[];
  categories: string[];
}

const formatPost = (unformattedPost: any) => {
  const categories: string[] = unformattedPost.class_list
    ?.filter((cl: string) => cl.match(/category/))
    ?.map((cl: string) => cl.replace(/category-/, ""));

  const post: Post = {
    id: unformattedPost.id,
    date: unformattedPost.date,
    slug: unformattedPost.slug,
    title: unformattedPost.title.rendered,
    content: unformattedPost.content.rendered,
    classList: unformattedPost.class_list,
    categories,
  };
  return post;
};

export async function getPosts(numberOfPosts = 10) {
  const res = await fetch(
    `${WORDPRESS_API_URL}/posts?per_page=${numberOfPosts}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const unformattedPosts: any[] = await res.json();

  return unformattedPosts.map(formatPost);
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const post = await res.json();

  return formatPost(post[0]);
}
