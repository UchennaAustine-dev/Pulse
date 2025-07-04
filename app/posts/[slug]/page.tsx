import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/sidebar";
import { Newsletter } from "@/components/newsletter";
import { ImageGallery } from "@/components/image-gallery";
import { RelatedPosts } from "@/components/related-posts";
import { SocialShare } from "@/components/social-share";
import { TableOfContents } from "@/components/table-of-contents";
import { ReadingProgress } from "@/components/reading-progress";
import { AdBanner } from "@/components/ad-banner";
import { getPostBySlug, getPosts, getRelatedPosts } from "@/lib/data";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import { Clock, Calendar } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The post you're looking for doesn't exist",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);
  const relatedPosts = await getRelatedPosts(post.id, post.category, post.tags);
  const contentSections = post.content
    .split("\n\n")
    .filter(
      (paragraph) =>
        paragraph.trim().startsWith("The ") ||
        paragraph.trim().startsWith("In ")
    )
    .slice(0, 3)
    .map((paragraph) => paragraph.split(".")[0]);

  return (
    <>
      <ReadingProgress />

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

      <div className="relative w-full bg-gradient-to-b from-black/70 to-transparent">
        <div className="absolute inset-0 -z-10">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="container max-w-[90%] mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge className="bg-pink-600 hover:bg-pink-700 text-white">
                {post.category}
              </Badge>
            </div>

            <h1 className="font-bebas-neue text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              {post.title}
            </h1>

            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-8">
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

          {/* Main Article Content */}
          <article className="lg:col-span-7 xl:col-span-7">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-pink-500"
                />
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Entertainment Editor
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block mb-8">
              <TableOfContents sections={contentSections} />
            </div>

            {/* Mobile Square Ad - After intro */}
            <div className="md:hidden my-8 flex justify-center">
              <AdBanner
                placementId="revbid-square"
                id="revbid-square-3919"
                minWidth={300}
                minHeight={250}
              />
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert mb-10">
              {post.content.split("\n\n").map((paragraph, index) => (
                <div key={index}>
                  <p>{paragraph}</p>
                  {/* Insert mobile ad after 3rd paragraph */}
                  {index === 2 && (
                    <div className="md:hidden my-8 flex justify-center not-prose">
                      <AdBanner
                        placementId="revbid-mobile"
                        id="revbid-mobile-content"
                        minWidth={300}
                        minHeight={100}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-indigo-100 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors"
                >
                  #{tag}
                </Badge>
              ))}
            </div>

            <div className="mb-10">
              <SocialShare title={post.title} slug={post.slug} />
            </div>

            {post.gallery && post.gallery.length > 0 && (
              <div className="mt-8 mb-12 bg-muted/30 p-6 rounded-xl">
                <h2 className="font-bebas-neue text-3xl font-bold mb-6 text-gradient">
                  Photo Gallery
                </h2>
                <ImageGallery images={post.gallery} />
              </div>
            )}

            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h2 className="font-bebas-neue text-3xl font-bold mb-6 text-pink-600 dark:text-pink-500">
                  You Might Also Like
                </h2>
                <RelatedPosts posts={relatedPosts} />
              </div>
            )}
          </article>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-20 space-y-8">
              {/* Desktop Square Ad */}
              <div className="hidden md:block">
                <AdBanner
                  placementId="revbid-square"
                  id="revbid-square-sidebar"
                  minWidth={300}
                  minHeight={250}
                />
              </div>

              <div className="bg-card rounded-xl shadow-sm border p-6">
                <h3 className="font-bebas-neue text-2xl font-bold mb-4">
                  About the Author
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium text-lg">
                      {post.author.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Entertainment Editor
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Passionate about entertainment and pop culture. Covering the
                  latest in music, movies, and celebrity news.
                </p>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-pink-100 dark:bg-pink-900/30 border-pink-200 dark:border-pink-800"
                  >
                    {post.category} Expert
                  </Badge>
                </div>
              </div>

              <Sidebar />

              <div className="mt-8">
                <Newsletter />
              </div>
            </div>
          </div>
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
              id="revbid-mobile-bottom"
              minWidth={300}
              minHeight={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
