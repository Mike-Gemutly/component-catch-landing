# AI-Coding Bridge Landing Page (Approach 1)

## Overview
This landing page positions Component Catch as **the AI-coding bridge** — the missing link between your browser and AI coding agents like Cursor, Claude, and Windsurf.

## Design Aesthetic
- **Theme:** Dark mode default (#0f172a background)
- **Primary Color:** Indigo (#6366f1)
- **Accent:** Amber (#f59e0b)
- **Success:** Emerald (#10b981)
- **Typography:** Inter (body), JetBrains Mono (code)

## Target Audience
- AI-coding enthusiasts using Cursor, Claude, Windsurf, Zed
- Frontend developers tired of copy-pasting into AI prompts
- Tech leads looking to improve AI code generation accuracy
- Early adopters of agentic workflows

## Key Value Propositions
1. **The AI-Coding Bridge** - Stop describing CSS to LLMs, send real data instead
2. **One-Click Context Transfer** - Pick any element and pipe it to your MCP-enabled agent
3. **10x Better Code Gen** - Real computed styles mean more accurate AI output
4. **26-Tool MCP Suite** - Complete integration with Cursor, Claude, Windsurf, VS Code
5. **Go-Powered Speed** - <5ms context transfer for instant AI response

## Sections
1. **Hero** - AI-Coding Bridge positioning, "Stop Copy-Pasting. Start Shipping."
2. **Stats** - 26 MCP Tools, 10x Better Code Gen, <5ms Context Transfer, 100% Accurate
3. **Primary Workflow** - "Give Your AI Agent 20/20 Vision" (NEW)
4. **Intelligence Suite** - Harmony Wheel, System Extraction, Go Speed (secondary benefit)
5. **Social Proof** - TypeScript, Open Source, Go Performance, Multi-Agent
6. **Integrations** - Cursor, Windsurf, Zed, Claude, VS Code, Warp, GitHub Copilot
7. **Value-Based Pricing** - "The Learner" ($0) vs "The Pro Agent" ($49)
8. **Footer** - Minimal with links

## Getting Started

```bash
cd developer-focused
npm install
npm run dev
```

Open `http://localhost:3000`

## File Structure
```
developer-focused/
├── package.json          # Dependencies and scripts
├── tailwind.config.ts     # Custom color palette
├── tsconfig.json         # TypeScript configuration
├── next.config.ts         # Next.js setup
└── src/app/
    ├── layout.tsx        # Root layout
    ├── page.tsx          # Main landing page
    └── globals.css       # Tailwind imports
```

## Installation Dependencies
- `next` ^15.4.10
- `react` ^19.0.0
- `react-dom` ^19.0.0
- `lucide-react` ^0.468.0

## Running Tests

```bash
npm run lint          # ESLint check
npm run build         # Production build
```

## Deployment

Build for production:
```bash
npm run build
```

Output in `.next/` folder - ready for Vercel, Netlify, or static export.

## Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { /* Your colors */ },
  success: { /* Your colors */ },
  accent: { /* Your colors */ },
}
```

### Change Stats
Edit `src/app/page.tsx` (lines 80-95):
```typescript
const stats = [
  { value: "26", label: "MCP Tools" },
  { value: "<100ms", label: "WebSocket Latency" },
  // Add more...
]
```

### Change Features
Edit `src/app/page.tsx` (lines 110-180):
```typescript
const features = [
  { icon: <Cpu />, title: "Framework Detection", description: "..." },
  // Add more...
]
```

## Key Design Decisions

1. **No Images** - Pure CSS/Tailwind for fast load times
2. **Single Page** - No navigation routing (landing-focused)
3. **Dark Mode Default** - Appeals to developer audience
4. **Gradient CTAs** - High contrast for conversions
5. **Lucide Icons** - Lightweight, developer-friendly

## Analytics Integration (Optional)

Add to `src/app/layout.tsx`:
```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://analytics.example.com/script.js" strategy="afterInteractive" />
      </head>
      {/* ... */}
    </html>
  )
}
```

## Browser Support
- Chrome/Edge (Chromium) - ✅
- Firefox - ✅
- Safari - ✅
- Mobile browsers - ✅

## Performance Targets
- Lighthouse Score: 95+
- First Contentful Paint: <1.0s
- Time to Interactive: <2.0s
- Cumulative Layout Shift: <0.1

## Inspiration Sources
- React DevTools landing page structure
- Vercel dark mode aesthetic
- Stripe technical documentation style
- GitHub developer tools pages

## Next Steps
- [ ] Add real screenshots of Component Catch
- [ ] Create animated SVG demos for features
- [ ] Add testimonial quotes from beta users
- [ ] Integrate with Chrome Web Store reviews API
- [ ] Add newsletter signup form
- [ ] Create variant A/B test pages

---

**Created:** 2025-01-24
**Approach:** 1 of 5 (Developer-Focused)
**Pattern:** React DevTools
