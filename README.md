# Build Time Calculator

A simple calculator that estimates how long it takes to build a SaaS app based on selected features and complexity level.

## What It Does

Input your planned features (authentication, payments, admin dashboard, etc.) and complexity level (simple/medium/complex), and get an estimate of:
- Total development hours
- Total development days (based on 6 productive hours per day)
- Hour breakdown by feature

All calculations happen client-side. No backend, no database, no data storage.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **TypeScript**: Strict mode
- **Deployment**: Vercel

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

## Building for Production

```bash
npm run build
```

## Environment Variables

None needed. This is a fully client-side application.

## Project Structure

```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Landing page
├── globals.css             # Tailwind + theme
└── _components/            # Page-specific components
    ├── calculator-form.tsx
    └── results-display.tsx

lib/
├── utils.ts                # shadcn helpers
└── calculator.ts           # Calculation logic

components/
└── ui/                     # shadcn/ui components
```

## License

MIT
