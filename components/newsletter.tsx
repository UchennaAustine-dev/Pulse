"use client";

import type React from "react";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast.success("Successfully subscribed!", {
        description: "You've been subscribed to our newsletter.",
      });
    }, 1000);
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-90" />
        <div className="relative p-6 sm:p-10 flex flex-col items-center text-center">
          <h2 className="font-bebas-neue text-3xl sm:text-4xl font-bold mb-4 text-white">
            Stay in the Loop! 🎉
          </h2>
          <p className="text-white/90 mb-6 max-w-md">
            Subscribe to our newsletter for the latest entertainment news,
            exclusive content, and special offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/90 border-0 focus-visible:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="bg-black hover:bg-gray-900 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="mt-4 text-xs text-white/80">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </div>
    </div>
  );
}
