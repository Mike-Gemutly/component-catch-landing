import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Component Catch – The Context Bridge for AI Coding',
  description: 'Bridge the gap between your browser and your AI agent. Instantly send precise web elements, styles, and layouts directly to Cursor, Claude, or Windsurf. Get 10x more accurate code generations with real-world context.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
