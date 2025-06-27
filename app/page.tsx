import { HeroCarousel } from "@/components/hero-carousel";
import { PostGrid } from "@/components/post-grid";
import { Sidebar } from "@/components/sidebar";
import { Newsletter } from "@/components/newsletter";
import { AdBanner } from "@/components/ad-banner";
import { getPosts } from "@/lib/data";

export default async function Home() {
  const posts = await getPosts();
  const trendingPosts = posts.slice(0, 5);
  const recentPosts = posts.slice(4);

  return (
    <div className="min-h-screen">
      {/* Top Leaderboard Ad */}
      <div className="border-b bg-muted/20">
        <div className="container max-w-[90%] mx-auto py-4 px-4 flex justify-center">
          <div className="hidden md:block">
            <AdBanner
              placementId="revbid-big-leaderboard"
              id="revbid-big-leaderboard-1142"
              minWidth={468}
              minHeight={60}
            />
          </div>
          <div className="md:hidden">
            <AdBanner
              placementId="revbid-mobile"
              id="revbid-mobile-774"
              minWidth={300}
              minHeight={100}
            />
          </div>
        </div>
      </div>

      <div className="container max-w-[90%] mx-auto px-4 py-8">
        <HeroCarousel posts={trendingPosts} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Desktop Skyscraper Ad */}
          <div className="hidden xl:block lg:col-span-2">
            <div className="sticky top-24">
              <AdBanner
                placementId="revbid-skyscraper"
                id="revbid-skyscraper-688"
                minWidth={120}
                minHeight={600}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-7 xl:col-span-7">
            <h2 className="font-bebas-neue text-4xl font-bold mb-6 text-pink-600 dark:text-pink-500">
              Latest Stories
            </h2>
            <PostGrid posts={recentPosts} />

            {/* Mobile Square Ad - Between content */}
            <div className="md:hidden my-8 flex justify-center">
              <AdBanner
                placementId="revbid-square"
                id="revbid-square-3919"
                minWidth={300}
                minHeight={250}
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Desktop Square Ad */}
              <div className="hidden md:block">
                <AdBanner
                  placementId="revbid-square"
                  id="revbid-square-3919"
                  minWidth={300}
                  minHeight={250}
                />
              </div>

              <Sidebar />

              {/* Big Skyscraper Ad - Desktop Only */}
              <div className="hidden xl:block">
                <AdBanner
                  placementId="revbid-big-skyscraper"
                  id="revbid-big-skyscraper-1408"
                  minWidth={120}
                  minHeight={600}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Newsletter />
        </div>
      </div>

      {/* Bottom Leaderboard Ad */}
      <div className="border-t bg-muted/20 mt-12">
        <div className="container max-w-[90%] mx-auto py-4 px-4 flex justify-center">
          <div className="hidden md:block">
            <AdBanner
              placementId="revbid-leaderboard"
              id="revbid-leaderboard-1860"
              minWidth={468}
              minHeight={60}
            />
          </div>
          <div className="md:hidden">
            <AdBanner
              placementId="revbid-mobile"
              id="revbid-mobile-774"
              minWidth={300}
              minHeight={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
