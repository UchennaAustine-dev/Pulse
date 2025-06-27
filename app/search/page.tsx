import { Suspense } from "react";
import { PostGrid } from "@/components/post-grid";
import { Sidebar } from "@/components/sidebar";
import { SearchForm } from "@/components/search-form";
import { AdBanner } from "@/components/ad-banner";
import { searchPosts } from "@/lib/data";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  const posts = query ? await searchPosts(query) : [];

  return (
    <div className="min-h-screen">
      {/* Top Leaderboard Ad */}
      <div className="border-b bg-muted/20">
        <div className="container max-w-6xl mx-auto py-4 px-4 flex justify-center">
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

      <div className="container max-w-6xl mx-auto px-4 py-8">
        <h1 className="font-bebas-neue text-4xl font-bold mb-6 text-pink-600 dark:text-pink-500">
          Search Results
        </h1>

        <div className="mb-8">
          <SearchForm defaultValue={query} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {query ? (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  {posts.length} results for "{query}"
                </h2>

                <Suspense fallback={<div>Loading results...</div>}>
                  {posts.length > 0 ? (
                    <PostGrid posts={posts} />
                  ) : (
                    <p className="text-lg">
                      No posts found matching your search.
                    </p>
                  )}
                </Suspense>
              </>
            ) : (
              <p className="text-lg">Enter a search term to find posts.</p>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
