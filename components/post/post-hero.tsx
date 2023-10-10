import { Post } from "@/types/collection";
import Image from "next/image";
import PostContent from "./post-content";

interface PostHeroProps {
  post: Post;
  locale?: string;
}
const PostHero = ({ post,  }: PostHeroProps) => {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <PostContent isPostPage post={post} />
      <Image
        priority
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
        src={`${post.image}`}
        width={1280}
        height={500}
        alt={post.title}
      />
    </div>
  );
};

export default PostHero;
