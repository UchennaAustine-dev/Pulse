"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  sections: string[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!sections.length) return null;

  return (
    <div className="bg-muted/30 rounded-lg p-4 mb-6">
      <Button
        variant="ghost"
        className="w-full flex justify-between items-center mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <List className="h-4 w-4 mr-2" />
          <span className="font-medium">In this article</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </Button>

      <div
        className={cn(
          "space-y-1 overflow-hidden transition-all",
          isOpen ? "max-h-40" : "max-h-0"
        )}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="pl-6 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {section}...
          </div>
        ))}
      </div>
    </div>
  );
}
