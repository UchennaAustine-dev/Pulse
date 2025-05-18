import Link from "next/link";
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  InstagramIcon as Tiktok,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container max-w-[90%] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <span className="font-bebas-neue text-3xl font-bold text-gradient">
                PULSE
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your daily dose of entertainment news, music, celebrities, and
              viral content.
            </p>
          </div>

          <div>
            <h3 className="font-bebas-neue text-xl font-bold mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/news"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/music"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/celebrities"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  Celebrities
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/viral"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  Viral
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/movies"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  Movies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bebas-neue text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/advertise"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  Advertise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bebas-neue text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm hover:text-pink-600 dark:hover:text-pink-500"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row max-w-6xl mx-auto">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Pulse Entertainment. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-500"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-500"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-500"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-500"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-500"
            >
              <Tiktok className="h-5 w-5" />
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
