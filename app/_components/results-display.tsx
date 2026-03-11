"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type CalculationResult } from "@/lib/calculator"

interface ResultsDisplayProps {
  result: CalculationResult
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const summary = `Build Time Estimate:
${result.totalHours} hours (${result.totalDays} days @ 6 hrs/day)
Complexity: ${result.complexity} (${result.multiplier}x)

Breakdown:
${result.breakdown.map((item) => `- ${item.feature}: ${item.hours} hrs`).join("\n")}

Calculate yours at build-time-calc.buildtolaunch.ai`

    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API not available or permission denied
      // Silently fail - user will not see the success message
    }
  }

  return (
    <Card className="w-full animate-in fade-in-50 duration-500">
      <CardHeader>
        <CardTitle className="text-xl">Your Build Time Estimate</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary */}
        <div className="rounded-lg bg-blue-50 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Total Hours
              </p>
              <p className="mt-1 text-3xl font-bold text-blue-900">
                {result.totalHours}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Estimated Days
              </p>
              <p className="mt-1 text-3xl font-bold text-blue-900">
                {result.totalDays}
              </p>
              <p className="mt-1 text-xs text-blue-900/60">
                at 6 productive hours/day
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm text-blue-900/60 mb-2">
              <span>Complexity: {result.complexity}</span>
              <span>{result.multiplier}x multiplier</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-blue-200">
              <div
                className="h-full bg-blue-600 transition-all duration-1000 ease-out"
                style={{
                  width: `${Math.min((result.totalHours / 200) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Breakdown table */}
        <div>
          <h3 className="mb-3 text-sm font-medium text-zinc-900">
            Feature Breakdown
          </h3>
          <div className="space-y-2">
            {result.breakdown.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-4 py-3"
              >
                <span className="text-sm text-zinc-700">{item.feature}</span>
                <span className="text-sm font-medium text-zinc-900">
                  {item.hours} hrs
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Share button */}
        <Button
          onClick={handleShare}
          variant="outline"
          className="w-full"
          size="lg"
        >
          {copied ? "Copied to clipboard!" : "Share Results"}
        </Button>
      </CardContent>
    </Card>
  )
}
