"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import {
  FEATURES,
  calculateBuildTime,
  type Complexity,
  type CalculationResult,
} from "@/lib/calculator"

interface CalculatorFormProps {
  onCalculate?: (result: CalculationResult) => void
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [complexity, setComplexity] = useState<Complexity>("medium")

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    )
  }

  const handleCalculate = () => {
    const result = calculateBuildTime(selectedFeatures, complexity)
    onCalculate?.(result)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Select Your Features</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Feature checkboxes */}
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="flex items-start space-x-3">
              <Checkbox
                id={feature.id}
                checked={selectedFeatures.includes(feature.id)}
                onCheckedChange={() => handleFeatureToggle(feature.id)}
              />
              <div className="space-y-1 leading-none">
                <Label
                  htmlFor={feature.id}
                  className="cursor-pointer font-medium"
                >
                  {feature.label}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Complexity selector */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Project Complexity</Label>
          <RadioGroup
            value={complexity}
            onValueChange={(value) => setComplexity(value as Complexity)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="simple" id="simple" />
              <Label htmlFor="simple" className="cursor-pointer font-normal">
                Simple (1x) - Basic implementation, minimal customization
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium" className="cursor-pointer font-normal">
                Medium (1.5x) - Some customization, standard integrations
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="complex" id="complex" />
              <Label htmlFor="complex" className="cursor-pointer font-normal">
                Complex (2x) - Heavy customization, complex workflows
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Calculate button */}
        <Button
          onClick={handleCalculate}
          disabled={selectedFeatures.length === 0}
          className="w-full"
          size="lg"
        >
          Calculate Build Time
        </Button>
      </CardContent>
    </Card>
  )
}
