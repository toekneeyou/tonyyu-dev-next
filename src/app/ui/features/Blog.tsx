import { BLOG_SECTION } from "@/app/lib/id";
import H1 from "../components/H1";

export default function Blog() {
  return (
    <section id={BLOG_SECTION} className="py-12 space-y-12">
      <H1>BLOG</H1>
    </section>
  );
}
