"use client"

import { useState } from "react"
import { CalculatorForm } from "./calculator-form"
import { ResultsDisplay } from "./results-display"
import { type CalculationResult } from "@/lib/calculator"

export function CalculatorWrapper() {
  const [result, setResult] = useState<CalculationResult | null>(null)

  return (
    <>
      <CalculatorForm onCalculate={setResult} />

      {result && (
        <div className="mt-8">
          <ResultsDisplay result={result} />
        </div>
      )}
    </>
  )
}
