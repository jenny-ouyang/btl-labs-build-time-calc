// Feature definitions and calculation logic

export interface Feature {
  id: string
  label: string
  description: string
  baseHours: number
}

export type Complexity = "simple" | "medium" | "complex"

export interface CalculationResult {
  selectedFeatures: Feature[]
  complexity: Complexity
  multiplier: number
  totalHours: number
  totalDays: number
  breakdown: { feature: string; hours: number }[]
}

// 10 common SaaS features with base hour estimates
export const FEATURES: Feature[] = [
  {
    id: "auth",
    label: "Authentication",
    description: "User login, signup, password reset",
    baseHours: 8,
  },
  {
    id: "database",
    label: "Database/CRUD",
    description: "Data models, create/read/update/delete operations",
    baseHours: 12,
  },
  {
    id: "payments",
    label: "Payments",
    description: "Stripe/payment gateway integration",
    baseHours: 16,
  },
  {
    id: "admin",
    label: "Admin Dashboard",
    description: "User management, analytics, settings",
    baseHours: 20,
  },
  {
    id: "email",
    label: "Email Notifications",
    description: "Transactional emails, templates",
    baseHours: 6,
  },
  {
    id: "uploads",
    label: "File Uploads",
    description: "Image/file upload, storage, processing",
    baseHours: 10,
  },
  {
    id: "search",
    label: "Search",
    description: "Full-text search, filters, sorting",
    baseHours: 14,
  },
  {
    id: "api",
    label: "API Integrations",
    description: "Third-party API connections",
    baseHours: 12,
  },
  {
    id: "dark-mode",
    label: "Dark Mode",
    description: "Theme switching, preference persistence",
    baseHours: 4,
  },
  {
    id: "mobile",
    label: "Mobile Responsive",
    description: "Mobile-first design, responsive layout",
    baseHours: 8,
  },
]

// Complexity multipliers
export const COMPLEXITY_MULTIPLIERS: Record<Complexity, number> = {
  simple: 1,
  medium: 1.5,
  complex: 2,
}

// Productive hours per day
const HOURS_PER_DAY = 6

/**
 * Calculate total build time based on selected features and complexity
 */
export function calculateBuildTime(
  selectedFeatureIds: string[],
  complexity: Complexity
): CalculationResult {
  const selectedFeatures = FEATURES.filter((f) =>
    selectedFeatureIds.includes(f.id)
  )

  const multiplier = COMPLEXITY_MULTIPLIERS[complexity]

  const breakdown = selectedFeatures.map((feature) => ({
    feature: feature.label,
    hours: feature.baseHours * multiplier,
  }))

  const totalHours = breakdown.reduce((sum, item) => sum + item.hours, 0)
  const totalDays = Math.ceil(totalHours / HOURS_PER_DAY)

  return {
    selectedFeatures,
    complexity,
    multiplier,
    totalHours,
    totalDays,
    breakdown,
  }
}
