import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import CategoryList from "@/components/categoryList/CategoryList";
import CTACard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/post/post-card";
import PostList from "@/components/post/post-lists";
import { notFound } from "next/navigation";

const getAllPosts = async (cat: string) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/posts?cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
// category
const getAllCategory = async () => {
  const res = await fetch("http://localhost:3000/api/blog/category", {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
export default async function Home({ searchParams }: any) {
  const { cat } = searchParams;
  const { posts } = await getAllPosts(cat);
  const { categories } = await getAllCategory();

  if (!posts) {
    notFound();
  }

  /* Get Dictionary */
  // const dictionary = await getDictionary(locale);

  return (
    <PaddingContainer>
      <main className="space-y-10">
        <CategoryList data={categories} />
        <PostCard post={posts[0]} />
        {posts.length > 1 && (
          <PostList
            posts={posts.filter(
              (_post: any, index: any) => index > 0 && index < 3
            )}
          />
        )}

        {/* ---@ts-expect-error Async Server Component */}
        <CTACard />
        <PostCard reverse post={posts[0]} />

        {posts.length > 3 && (
          <PostList
            posts={posts.filter(
              (_post: any, index: any) => index > 3 && index < 6
            )}
          />
        )}
      </main>
    </PaddingContainer>
  );
}
