"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SocialShareProps {
  title: string;
  slug: string;
}

export function SocialShare({ title, slug }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/posts/${slug}`
      : `/posts/${slug}`;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast.success("Link copied to clipboard!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="bg-muted/30 p-5 rounded-lg">
      <h3 className="font-medium mb-3">Share this article</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border-[#1DA1F2]/20"
          onClick={() => window.open(shareLinks.twitter, "_blank")}
        >
          <Twitter className="h-4 w-4 mr-2 text-[#1DA1F2]" />
          Twitter
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="bg-[#4267B2]/10 hover:bg-[#4267B2]/20 border-[#4267B2]/20"
          onClick={() => window.open(shareLinks.facebook, "_blank")}
        >
          <Facebook className="h-4 w-4 mr-2 text-[#4267B2]" />
          Facebook
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="bg-[#0077B5]/10 hover:bg-[#0077B5]/20 border-[#0077B5]/20"
          onClick={() => window.open(shareLinks.linkedin, "_blank")}
        >
          <Linkedin className="h-4 w-4 mr-2 text-[#0077B5]" />
          LinkedIn
        </Button>

        <Button
          variant="outline"
          size="sm"
          className={
            copied
              ? "bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800"
              : ""
          }
          onClick={copyToClipboard}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2 text-green-600 dark:text-green-500" />
              Copied
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4 mr-2" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
