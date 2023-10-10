import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CTACard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/post/post-card";
import PostList from "@/components/post/post-lists";

import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: {
    lang: string;
  };
}) {
  const locale = params.lang;

  /* Get Dictionary */
  // const dictionary = await getDictionary(locale);

  return (
    <PaddingContainer>
      <main className="space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList
          posts={DUMMY_POSTS.filter(
            (_post: any, index: any) => index > 0 && index < 3
          )}
        />
        {/* ---@ts-expect-error Async Server Component */}
        <CTACard />
        <PostCard reverse post={DUMMY_POSTS[3]} />
        <PostList
          posts={DUMMY_POSTS.filter(
            (_post: any, index: any) => index > 3 && index < 6
          )}
        />
      </main>
    </PaddingContainer>
  );
}
