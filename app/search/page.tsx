import { Suspense } from "react";
import { PostGrid } from "@/components/post-grid";
import { Sidebar } from "@/components/sidebar";
import { SearchForm } from "@/components/search-form";
import { searchPosts } from "@/lib/data";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  const posts = query ? await searchPosts(query) : [];

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-bebas-neue text-4xl font-bold mb-6 text-pink-600 dark:text-pink-500">
        Search Results
      </h1>

      <div className="mb-8">
        <SearchForm defaultValue={query} />
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full md:w-2/3">
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

        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
