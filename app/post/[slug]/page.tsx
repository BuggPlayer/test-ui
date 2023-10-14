import CTACard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHero from "@/components/post/post-hero";
import siteConfig from "@/config/site";

const Page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  /*   const post = DUMMY_POSTS.find((post) => post.slug === params.slug); */
  const getPostData = async (postSlug:any) => {
    const res = await fetch(`http://localhost:3000/api/blog/posts/${postSlug}`, {
      cache: "no-store",
    });


    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  const postSlug = params.slug;

  const {post} = await getPostData(postSlug);

  //     "@context": "https://schema.org",
  //     "@type": "Article",
  //     headline: post.title,
  //     image: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/post/${postSlug}/opengraph-image.png`,
  //     author: post.author.first_name + " " + post.author.last_name,
  //     genre: post.category.title,
  //     publisher: siteConfig.siteName,
  //     url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${postSlug}`,
  //     datePublished: new Date(post.date_created).toISOString(),
  //     dateCreated: new Date(post.date_created).toISOString(),
  //     dateModified: new Date(post.date_updated).toISOString(),
  //     description: post.description,
  //     articleBody: post.body,
  //   };

  // If there is no post found, return 404
  //   if (!post) {
  //     notFound();
  //   }

  //   const dictionary = await getDictionary(locale);

  return (
    <PaddingContainer>
      {/* Add JSON-LD to your page */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      {/* Container */}
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero post={post} />
        {/* Post Body and Social Share */}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="relative">
            <div className="sticky flex items-center gap-5 md:flex-col top-20">
              <div className="font-medium md:hidden">Share this content:</div>
              <SocialLink
                isShareURL
                platform="facebook"
                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="twitter"
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="linkedin"
                link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
            </div>
          </div>
          <PostBody body={post.desc} />
        </div>
        {/* CTA Card */}
        {/* ---@ts-expect-error Async Server Component */}
        <CTACard />
      </div>
    </PaddingContainer>
  );
};

export default Page;
