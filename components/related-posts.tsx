import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/lib/types";

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover-scale">
          <Link href={`/posts/${post.slug}`} className="block">
            <div className="relative h-40 w-full">
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

          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground mb-2">
              {formatDate(post.date)}
            </div>

            <h3 className="font-bebas-neue text-xl font-bold mb-2 line-clamp-2">
              <Link
                href={`/posts/${post.slug}`}
                className="hover:text-pink-600 dark:hover:text-pink-500 transition-colors"
              >
                {post.title}
              </Link>
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
              {post.excerpt}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
