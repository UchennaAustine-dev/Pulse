import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdBanner } from "@/components/ad-banner";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/lib/types";

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps) {
  if (!posts.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {posts.map((post, index) => (
        <div key={post.id}>
          <Card className="overflow-hidden hover-scale">
            <Link href={`/posts/${post.slug}`} className="block">
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-pink-600 hover:bg-pink-700">
                    {post.category}
                  </Badge>
                </div>
              </div>
            </Link>

            <CardContent className="p-3 sm:p-4">
              <div className="text-sm text-muted-foreground mb-2">
                {formatDate(post.date)}
              </div>

              <h3 className="font-bebas-neue text-2xl font-bold mb-2 line-clamp-2">
                <Link
                  href={`/posts/${post.slug}`}
                  className="hover:text-pink-600 dark:hover:text-pink-500 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="text-muted-foreground line-clamp-3 mb-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm">{post.author.name}</span>
              </div>
            </CardContent>
          </Card>

          {/* Insert mobile ad after every 4th post */}
          {(index + 1) % 4 === 0 && index < posts.length - 1 && (
            <div className="md:hidden my-6 flex justify-center col-span-full">
              <AdBanner
                placementId="revbid-mobile"
                id={`revbid-mobile-${index}`}
                minWidth={300}
                minHeight={100}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
