import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdBanner } from "@/components/ad-banner";
import { getTrendingTags, getPopularPosts } from "@/lib/data";
import { PollWidget } from "@/components/poll-widget";

export async function Sidebar() {
  const trendingTags = await getTrendingTags();
  const popularPosts = await getPopularPosts();

  return (
    <div className="space-y-6">
      {/* Mobile Square Ad - Only show on mobile in sidebar */}
      <div className="md:hidden">
        <AdBanner
          placementId="revbid-square"
          id="revbid-square-mobile"
          minWidth={300}
          minHeight={250}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-bebas-neue text-2xl">
            Trending Tags
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <Badge
              key={tag.id}
              variant="outline"
              className="bg-indigo-100 dark:bg-indigo-900 border-indigo-200 dark:border-indigo-800"
            >
              <Link href={`/search?q=${encodeURIComponent(tag.name)}`}>
                #{tag.name}
              </Link>
            </Badge>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-bebas-neue text-2xl">
            Popular Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={post.id} className="flex gap-3">
              <div className="flex-shrink-0 font-bebas-neue text-2xl font-bold text-pink-600 dark:text-pink-500">
                {index + 1}
              </div>
              <div>
                <Link
                  href={`/posts/${post.slug}`}
                  className="font-medium hover:text-pink-600 dark:hover:text-pink-500 transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <div className="text-sm text-muted-foreground mt-1">
                  {post.views} views
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <PollWidget />

      <Card>
        <CardHeader>
          <CardTitle className="font-bebas-neue text-2xl">Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-pink-600 to-indigo-600 text-white p-4 rounded-lg text-center">
            <p className="font-pacifico text-xl mb-2">Stay Connected!</p>
            <p className="text-sm mb-3">
              Follow us on social media for exclusive content and updates.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200"
              >
                <span className="sr-only">TikTok</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-music"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
