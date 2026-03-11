# Build Plan

## Features (in build order)

### Phase 1: Calculator Form and Core Logic
- **What**: Build the landing page with a headline ("How long will your app take to build?"), description, and the calculator form. The form includes checkboxes for 10 common SaaS features (Authentication, Database/CRUD, Payments, Admin dashboard, Email notifications, File uploads, Search, API integrations, Dark mode, Mobile responsive), each with a base time estimate in hours. Add a complexity radio selector (Simple 1x, Medium 1.5x, Complex 2x) and a Calculate button. Create the calculation logic in `lib/calculator.ts` as pure functions.
- **Acceptance criteria**:
  - Page renders with headline, description, and calculator form
  - All 10 feature checkboxes are present with labels
  - Complexity radio selector works (Simple/Medium/Complex)
  - Calculate button computes total hours using selected features * complexity multiplier
  - Calculation logic is in `lib/calculator.ts` with proper TypeScript types
  - `npm run build` succeeds
- **Depends on**: none
- **shadcn components needed**: Checkbox, RadioGroup, Button, Card, Label

### Phase 2: Results Display with Breakdown
- **What**: After clicking Calculate, show results below the form (no page navigation). Display: total estimated hours, estimated days (at 6 productive hours/day), a breakdown table showing each selected feature with its individual time estimate (adjusted by multiplier), and a visual progress bar indicating the total. Include a "Share results" button that copies a summary to clipboard. Results should fade in with a subtle animation.
- **Acceptance criteria**:
  - Results appear below the form after clicking Calculate
  - Total hours and estimated days are displayed
  - Breakdown table shows each selected feature and its adjusted hours
  - Progress bar visually represents the total
  - "Share results" button copies a text summary to clipboard
  - Results fade in with animation
  - `npm run build` succeeds
- **Depends on**: Phase 1

### Phase 3: Polish and SEO
- **What**: Add proper metadata (title, description, OG tags) to the root layout. Add a footer with "Built with the autonomous build system at buildtolaunch.ai". Ensure the page looks good on mobile (320px through 1024px+). Verify all animations are smooth. Final visual QA pass.
- **Acceptance criteria**:
  - Page has proper `<title>`, meta description, and OG tags
  - Footer is present with the buildtolaunch.ai attribution
  - Page is responsive from 320px to 1024px+ (no horizontal scroll, readable text, properly stacked elements on mobile)
  - All interactive elements are accessible (keyboard navigable, proper labels)
  - `npm run build` succeeds
- **Depends on**: Phase 2
