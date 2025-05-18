import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <h1 className="font-bebas-neue text-6xl md:text-8xl font-bold mb-4 text-pink-600 dark:text-pink-500">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-lg mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild size="lg">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
