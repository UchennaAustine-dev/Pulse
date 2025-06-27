import { notFound } from "next/navigation";
import { PostGrid } from "@/components/post-grid";
import { Sidebar } from "@/components/sidebar";
import { AdBanner } from "@/components/ad-banner";
import { getPostsByCategory, getCategories } from "@/lib/data";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const categorySlug = resolvedParams.category;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The category you're looking for doesn't exist",
    };
  }

  return {
    title: `${category.name} - Pulse Entertainment Blog`,
    description: `Latest ${category.name} news and stories`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const categorySlug = resolvedParams.category;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(categorySlug);

  return (
    <div className="min-h-screen">
      {/* Top Leaderboard Ad */}
      <div className="border-b bg-muted/20">
        <div className="container max-w-6xl mx-auto py-4 px-4 flex justify-center">
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

      <div className="container max-w-6xl mx-auto px-4 py-8">
        <h1 className="font-bebas-neue text-4xl md:text-5xl font-bold mb-8 text-pink-600 dark:text-pink-500">
          {category.name}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
            {posts.length > 0 ? (
              <PostGrid posts={posts} />
            ) : (
              <p className="text-lg">No posts found in this category.</p>
            )}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
