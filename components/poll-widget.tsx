"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pollOptions = [
  { id: 1, text: "Taylor Swift", votes: 342 },
  { id: 2, text: "Beyoncé", votes: 289 },
  { id: 3, text: "Ariana Grande", votes: 176 },
  { id: 4, text: "Billie Eilish", votes: 203 },
];

export function PollWidget() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [results, setResults] = useState(pollOptions);

  const totalVotes = results.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = () => {
    if (selectedOption === null) return;

    setHasVoted(true);

    // Update the vote count
    setResults(
      results.map((option) =>
        option.id === selectedOption
          ? { ...option, votes: option.votes + 1 }
          : option
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bebas-neue text-2xl">
          Poll: Artist of the Year
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {results.map((option) => {
            const percentage =
              totalVotes > 0
                ? Math.round((option.votes / totalVotes) * 100)
                : 0;

            return (
              <div key={option.id} className="space-y-1">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={`option-${option.id}`}
                    name="poll"
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                    checked={selectedOption === option.id}
                    onChange={() => !hasVoted && setSelectedOption(option.id)}
                    disabled={hasVoted}
                  />
                  <label
                    htmlFor={`option-${option.id}`}
                    className={cn(
                      "text-sm font-medium flex-1",
                      hasVoted &&
                        selectedOption === option.id &&
                        "text-pink-600 dark:text-pink-500"
                    )}
                  >
                    {option.text}
                  </label>
                  {hasVoted && (
                    <span className="text-sm font-medium">{percentage}%</span>
                  )}
                </div>

                {hasVoted && (
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full",
                        selectedOption === option.id
                          ? "bg-pink-600 dark:bg-pink-500"
                          : "bg-indigo-600 dark:bg-indigo-500"
                      )}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!hasVoted ? (
          <Button
            onClick={handleVote}
            disabled={selectedOption === null}
            className="w-full"
          >
            Vote Now
          </Button>
        ) : (
          <div className="text-center text-sm text-muted-foreground">
            Total votes: {totalVotes}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
