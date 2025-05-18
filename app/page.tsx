import { HeroCarousel } from "@/components/hero-carousel";
import { PostGrid } from "@/components/post-grid";
import { Sidebar } from "@/components/sidebar";
import { Newsletter } from "@/components/newsletter";
import { getPosts } from "@/lib/data";

export default async function Home() {
  const posts = await getPosts();
  const trendingPosts = posts.slice(0, 5);
  const recentPosts = posts.slice(4);

  return (
    <div className="container max-w-[90%] mx-auto px-4 py-8">
      <HeroCarousel posts={trendingPosts} />

      <div className="mt-12 flex flex-col gap-8 md:flex-row">
        <div className="w-full md:w-2/3">
          <h2 className="font-bebas-neue text-4xl font-bold mb-6 text-pink-600 dark:text-pink-500">
            Latest Stories
          </h2>
          <PostGrid posts={recentPosts} />
        </div>

        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <Sidebar />
        </div>
      </div>

      <div className="mt-16">
        <Newsletter />
      </div>
    </div>
  );
}
