# Project: Build Time Calculator

## Meta
- **Slug**: build-time-calc
- **Subdomain**: build-time-calc.buildtolaunch.ai
- **Description**: Estimate how long it takes to build a SaaS app based on features and complexity
- **Target user**: Indie hackers and solo developers planning their next project
- **Ship date**: None (test build for orchestrator validation)

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Database**: none
- **Auth**: none
- **Styling**: Tailwind CSS + shadcn/ui
- **Payments**: none
- **Other**: none

## Features (ordered by priority)

1. **Landing page with calculator form**: A clean single-page app with a headline ("How long will your app take to build?"), a brief description, and the calculator form below. The form has checkboxes for common SaaS features: Authentication, Database/CRUD, Payments (Stripe), Admin dashboard, Email notifications, File uploads, Search, API integrations, Dark mode, Mobile responsive. Each feature has a base time estimate in hours. There is also a "complexity" radio selector: Simple (1x multiplier), Medium (1.5x), Complex (2x). A "Calculate" button computes the total and displays the result.

2. **Results display with breakdown**: After clicking Calculate, show the results below the form (no page navigation). Display: total estimated hours, estimated days (at 6 productive hours/day), a breakdown table showing each selected feature with its individual time estimate, and a visual progress-bar style indicator of the total. Include a "Share results" button that copies a summary to clipboard.

3. **Polish and SEO**: Add proper metadata (title, description, OG tags). Add a footer with "Built with the autonomous build system at buildtolaunch.ai". Ensure the page looks good on mobile (320px through 1024px+). Add subtle animations on the results reveal (fade in).

## Design Notes
- Visual style: modern, minimal, clean
- Color palette: neutral grays with a blue accent (#3b82f6)
- Dark background optional (light mode is fine for v1)
- Single page, no navigation needed
- Reference: cal.com style simplicity

## Non-Goals
- No user accounts or authentication
- No database or persistence
- No backend API (all calculations client-side)
- No payment processing
- No multi-page navigation
