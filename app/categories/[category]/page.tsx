import { notFound } from "next/navigation";
import { PostGrid } from "@/components/post-grid";
import { Sidebar } from "@/components/sidebar";
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
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-bebas-neue text-4xl md:text-5xl font-bold mb-8 text-pink-600 dark:text-pink-500">
        {category.name}
      </h1>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full md:w-2/3">
          {posts.length > 0 ? (
            <PostGrid posts={posts} />
          ) : (
            <p className="text-lg">No posts found in this category.</p>
          )}
        </div>

        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
