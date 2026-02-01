'use client';

import { Zap, Code2, Shield, Globe, Cpu, Rocket } from 'lucide-react'
import { PaymentButton } from '../components/PaymentButton'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-[#0f172a]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Component Catch
              </span>
              <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">v2.0</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#integrations" className="text-slate-300 hover:text-white transition-colors">Integrations</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="text-slate-300 hover:text-white transition-colors">Docs</a>
          </div>
          <a href="#" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors">
            Install Free
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-transparent to-accent-900/50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full text-sm mb-8">
              <Rocket className="w-4 h-4 text-accent" />
              <span className="text-accent-300">The AI-Coding Bridge — Stop Copy-Pasting. Start Shipping.</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              The Context Bridge for AI Coding
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Bridge the gap between your browser and your AI agent. Instantly send precise web elements, styles, and layouts directly to Cursor, Claude, or Windsurf. Get 10x more accurate code generations with real-world context.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://chrome.google.com/webstore/detail/component-catch/extension-id" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25">
                Install for Chrome Free
              </a>
              <PaymentButton
                tier="pro"
                className="border-2 border-accent hover:border-accent-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
              >
                Get Premium - $39
              </PaymentButton>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">26</div>
              <div className="text-slate-400">MCP Tools for AI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10×</div>
              <div className="text-slate-400">Better Code Gen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-success mb-2">&lt;5ms</div>
              <div className="text-slate-400">Context Transfer</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-success mb-2">100%</div>
              <div className="text-slate-400">Accurate Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Workflow - The AI-Agent Loop */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Give Your AI Agent 20/20 Vision</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Stop describing CSS to an LLM. Send the raw, parsed data directly from your browser to your AI coding agent.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">One-Click Context Transfer</h3>
              <p className="text-slate-400 leading-relaxed">
                Pick any element on any page and pipe it directly to your MCP-enabled agent. No screenshots, no copy-paste.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">End Manual Prompting</h3>
              <p className="text-slate-400 leading-relaxed">
                Your AI gets the exact computed styles, color values, and layout metrics. No more describing what you see.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Agentic Workflows</h3>
              <p className="text-slate-400 leading-relaxed">
                Works natively with Cursor, Zed, VS Code, Claude, and Windsurf via the 26-tool MCP suite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Intelligence Suite */}
      <section id="features" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Ultimate Intelligence Suite for Web Designers</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              When you aren't coding with AI, use Component Catch to reverse-engineer the web's best designs. Steal—legally.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 hover:border-primary-500/50 p-8 rounded-2xl transition-all hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Interactive Harmony Wheel</h3>
              <p className="text-slate-400 leading-relaxed">
                Reverse-engineer the world's best color palettes for your own design system. See relationships instantly.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 hover:border-primary-500/50 p-8 rounded-2xl transition-all hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-600 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">System Extraction</h3>
              <p className="text-slate-400 leading-relaxed">
                Turn any website into a structured Tailwind or JSON configuration in seconds. Export ready-to-use tokens.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 hover:border-primary-500/50 p-8 rounded-2xl transition-all hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-success to-success-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Go-Powered Speed</h3>
              <p className="text-slate-400 leading-relaxed">
                No lag, even on enterprise-grade sites. Built for agencies that need to move at the speed of thought.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 hover:border-primary-500/50 p-8 rounded-2xl transition-all hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Find-in-Code Integration</h3>
              <p className="text-slate-400 leading-relaxed">
                Jump from inspected styles straight to the source code — no searching. Works with VS Code, Cursor, Windsurf.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 hover:border-primary-500/50 p-8 rounded-2xl transition-all hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Free Node.js Tier</h3>
              <p className="text-slate-400 leading-relaxed">
                Perfect for learning, quick checks, and one-off audits. Full inspection capabilities with zero cost.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 hover:border-primary-500/50 p-8 rounded-2xl transition-all hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">26-Tool MCP Suite</h3>
              <p className="text-slate-400 leading-relaxed">
                Pass real design data directly into your AI tools. No copy-paste, no screenshots, just precise context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Built Like a Tool Your AI Can Trust</h2>
            <p className="text-lg text-slate-400">
              Precise data means better code generation. Every element is inspected, parsed, and ready for your agent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-8 h-8 text-primary-400" />
                <h4 className="font-bold">Built with TypeScript</h4>
              </div>
              <p className="text-slate-400 text-sm">
                Rigorously typed with full type safety. Zero runtime errors from type mismatches.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-success" />
                <h4 className="font-bold">Open Source</h4>
              </div>
              <p className="text-slate-400 text-sm">
                Fully auditable codebase. MIT license for maximum flexibility.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-accent" />
                <h4 className="font-bold">Go Performance</h4>
              </div>
              <p className="text-slate-400 text-sm">
                Native Go binary for 100× faster processing and instant AI context transfer.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-primary-400" />
                <h4 className="font-bold">Multi-Agent Support</h4>
              </div>
              <p className="text-slate-400 text-sm">
                Works with any MCP-compatible agent. No vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Value-Based Tiers for Every Workflow</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-2">
              Start learning for free. Unlock the full AI suite when you're ready to ship.
            </p>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The Learner gives you the bridge. The Pro Agent gives you the speed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Tier - The Learner */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">The Learner</h3>
                <div className="text-4xl font-bold text-slate-300 mb-2">$0</div>
                <p className="text-slate-400">Standard AI Bridge + Basic Design Audits</p>
                <p className="text-sm text-slate-500 mt-1">Perfect for hobbyists</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">13 MCP tools for AI agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Full CSS inspection capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Interactive Harmony Wheel</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Design system extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">100% local privacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-slate-600 rounded mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500">Node.js runtime (noticeable delays on large sites)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-slate-600 rounded mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500">No offline cache</span>
                </li>
              </ul>
              <a href="#" className="block w-full mt-8 text-center bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition-colors">
                Start Learning Free
              </a>
            </div>

            {/* Premium Tier - The Pro Agent */}
            <div className="bg-gradient-to-br from-primary-900/50 to-primary-800/50 border-2 border-primary-500 p-8 rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                THE FULL AI SUITE
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold mb-2">The Pro Agent</h3>
                <div className="text-4xl font-bold text-primary-400 mb-2">$39<span className="text-lg text-slate-400">/one-time</span></div>
                <p className="text-slate-400">Instant AI Context Transfer + Complete 26-Tool MCP Library</p>
                <p className="text-sm text-slate-500 mt-1">Built for daily professional use</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300"><strong className="text-white">26 MCP tools</strong> (complete suite)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300"><strong className="text-white">&lt;5ms latency</strong> — instant context transfer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300"><strong className="text-white">10× lower memory</strong> usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300"><strong className="text-white">24h offline cache</strong> — work anywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Real-time WebSocket modifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Native Go binary (no Node.js)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Priority support & updates</span>
                </li>
              </ul>
              <PaymentButton
                tier="pro"
                className="block w-full mt-8 text-center bg-gradient-to-r from-accent to-accent-600 hover:from-accent-500 hover:to-accent-700 text-white py-3 rounded-lg font-bold transition-all hover:scale-105"
              >
                Get the Pro Agent - $39
              </PaymentButton>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Works with Your Favorite Tools</h2>
          <p className="text-xl text-slate-400 mb-12">Seamless integration across the modern development stack</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['VS Code', 'Cursor', 'Windsurf', 'Zed', 'Claude', 'Warp', 'GitHub Copilot', 'Tailwind CSS'].map((tool) => (
              <div key={tool} className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-primary-500 transition-colors">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop Copy-Pasting. Start Shipping.</h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Give your AI agent the eyes it needs. Bridge your browser to Cursor, Claude, or Windsurf in one click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-primary-600 hover:bg-slate-100 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
              Get the Learner Free
            </a>
            <a href="#pricing" className="border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
              Compare Tiers
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold">Component Catch</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2025 Component Catch. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
