# AnnaMitra AI Coding Agent Instructions

## Project Overview
AnnaMitra is a static web application for AI-powered crop yield prediction and advisory, targeting farmers and government officers. The codebase consists of three main files:
- `index.html`: Main landing page, multi-language support, role selection, and UI sections for features, benefits, and contact.
- `script.js`: Handles all client-side interactivity, including navigation, language switching, modal logic, form validation, and UI animations.
- `styles.css`: Implements a modern, responsive design with custom variables, grid layouts, and animation effects.

## Architecture & Data Flow
- **Single-page static app**: No backend or API calls; all logic is client-side.
- **Role-based UI**: Users select "Farmer" or "Government Officer"; selection triggers demo alerts (real redirects are commented out for future implementation).
- **Multi-language support**: Text elements use `data-en`, `data-hi`, and `data-or` attributes. Language switching updates visible text dynamically.
- **Modal & Form Handling**: Sign-in modal is managed via JS; form submission is simulated with alerts and loading states.
- **Animations**: IntersectionObserver and CSS transitions animate cards, sections, and stats on scroll and interaction.

## Developer Workflows
- **No build step**: Directly edit HTML, CSS, and JS files. Changes are reflected immediately in the browser.
- **Debugging**: Use browser DevTools for inspecting DOM, styles, and JS errors. No source maps or frameworks.
- **Testing**: Manual, via browser. No automated tests or CI/CD.

## Project-Specific Patterns
- **Language switching**: Always update text via `data-*` attributes, not innerHTML.
- **Role selection**: Use `selectRole(role)` for UI feedback and demo alerts. Real navigation is planned but not implemented.
- **Animations**: Use IntersectionObserver for scroll-based reveals; CSS transitions for hover and loading states.
- **Form validation**: JS functions for email/password validation; error messages injected as sibling elements.
- **Responsive design**: CSS grid and media queries for layout adaptation.

## Integration Points
- **External dependencies**: Font Awesome (icons), Google Fonts (Inter, Poppins) via CDN in `index.html`.
- **No server/API**: All data and logic are local; future backend integration would require new endpoints and JS fetch logic.

## Conventions & Recommendations
- Keep all UI logic in `script.js`. Avoid inline JS in HTML except for simple event hooks.
- Use CSS variables for colors and gradients; prefer grid/flex layouts for responsiveness.
- When adding new UI sections, follow the pattern of section containers and header classes.
- For new languages, add `data-xx` attributes to all relevant elements and update the language selector.
- For new roles or features, extend the role selection logic and UI cards in both HTML and JS.

## Key Files
- `index.html`: Structure, content, and external resource links.
- `script.js`: All interactivity, event handling, and dynamic UI logic.
- `styles.css`: Design system, layout, and animation rules.

---
For questions or missing conventions, review the main files or ask for clarification. This project is static and demo-focused; future backend/API work will require new architectural decisions.
