import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-0">
      {/* Hero Section */}
      <header className="py-14 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--grove)] leading-tight">
            We've Been Building These Tools for 20+ Years
          </h1>
          <p className="max-w-[900px] mx-auto text-lg md:text-xl text-[var(--muted)] mb-8 leading-relaxed">
            Alternative investment operations built by people who've launched funds, 
            passed institutional ODD 300+ times, and shipped production systems at scale.
            <br/><br/>
            <strong className="text-[var(--grove)]">Real infrastructure. Real experience. Real results.</strong>
          </p>
        </div>

        {/* Proof Points - What Makes Us Different */}
        <div className="forest-card p-8 md:p-10 mb-8 bg-gradient-to-br from-[#f0f7f0] to-[#e8f5e8] dark:from-[#0f1511] dark:to-[#0f1410]">
          <h2 className="text-2xl font-bold mb-6 text-[var(--grove)] text-center">
            Not Another AI Company With No Alts Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 text-[var(--grove)]">What We've Actually Done:</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>✓ Launched 2 funds from $0 to institutional scale ($150M, $200M commitments)</li>
                <li>✓ CFO/COO at 2 hedge funds, consultant to 10+ managers</li>
                <li>✓ 300+ operational due diligence reviews for $100B pension + institutional allocators</li>
                <li>✓ Built the infrastructure that survives ODD - because we've been on both sides</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-[var(--grove)]">What We Actually Build:</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>✓ PostgreSQL + SQLAlchemy backend with real CRUD APIs</li>
                <li>✓ Next.js/React frontends with production-grade architecture</li>
                <li>✓ Multi-model LLM routing (Claude, GPT-4, Gemini) with cost optimization</li>
                <li>✓ FAISS vector stores for semantic document search</li>
                <li>✓ Not demos. Not prototypes. <strong className="text-[var(--grove)]">Production systems.</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          <a
            href="https://calendly.com/chris-groveline"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
          >
            Schedule Infrastructure Assessment
          </a>
          <a
            href="https://www.linkedin.com/in/chainlen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-2xl bg-[#f3faf3] dark:bg-[var(--panel)] text-[#1d3a22] dark:text-[var(--ink)] border border-[var(--border)] font-semibold hover:bg-[#e8f5e8] dark:hover:bg-[#243a28] transition-colors"
          >
            Connect on LinkedIn
          </a>
        </div>
      </header>

      {/* The Experience Stats */}
      <section className="py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[var(--grove)]">
          The Experience That Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="forest-card p-6 text-center">
            <div className="text-4xl font-bold text-[var(--forest)] mb-2">300+</div>
            <div className="text-sm text-[var(--muted)]">ODD Reviews</div>
            <div className="text-xs text-[var(--muted)] mt-2">We know what allocators look for</div>
          </div>
          <div className="forest-card p-6 text-center">
            <div className="text-4xl font-bold text-[var(--forest)] mb-2">$350M+</div>
            <div className="text-sm text-[var(--muted)]">Capital Raised</div>
            <div className="text-xs text-[var(--muted)] mt-2">From zero to institutional commitments</div>
          </div>
          <div className="forest-card p-6 text-center">
            <div className="text-4xl font-bold text-[var(--forest)] mb-2">20+</div>
            <div className="text-sm text-[var(--muted)]">Years Building</div>
            <div className="text-xs text-[var(--muted)] mt-2">VBA → SQL → Python → AI</div>
          </div>
          <div className="forest-card p-6 text-center">
            <div className="text-4xl font-bold text-[var(--forest)] mb-2">2x</div>
            <div className="text-sm text-[var(--muted)]">C-Level Operator</div>
            <div className="text-xs text-[var(--muted)] mt-2">CFO/COO at institutional funds</div>
          </div>
        </div>
      </section>

      {/* The Problem Statement */}
      <section className="py-8 md:py-12">
        <div className="forest-card p-8 md:p-10 bg-gradient-to-br from-[#fff8f0] to-[#ffe8d5] dark:from-[#1a0f05] dark:to-[#0f0805]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--grove)]">
            The Problem With AI Companies Entering Alts
          </h2>
          <p className="text-lg text-[var(--muted)] mb-4">
            They have great technology. They have smart engineers. 
          </p>
          <p className="text-lg text-[var(--muted)] mb-4">
            <strong className="text-[var(--grove)]">But they've never sat through an ODD call.</strong>
          </p>
          <p className="text-lg text-[var(--muted)]">
            They don't know what allocators ask. They don't know what breaks under institutional scrutiny. 
            They don't know the difference between a policy that <em>looks</em> good and one that actually <em>works</em>.
          </p>
          <div className="mt-6 p-4 bg-white/50 dark:bg-black/20 rounded-lg border border-[var(--border)]">
            <p className="text-base text-[var(--muted)] italic">
              "You can build the best reconciliation engine in the world. But if it doesn't generate 
              the audit trail allocators expect, if it doesn't map to your policy framework, if it 
              doesn't survive a mock ODD session — it doesn't matter."
            </p>
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[var(--grove)]">
          We Solve Real Problems With Real Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Fund Launches */}
          <div className="forest-card p-6">
            <span className="forest-badge mb-3">Fund Launches</span>
            <h3 className="text-xl font-bold mb-3 text-[var(--grove)]">Zero to Institutional Scale</h3>
            <p className="text-[var(--muted)] mb-4">
              SEC registration, policy frameworks, vendor selection, OMS integration, audit prep. 
              The entire stack that took Merewether from $0 to $150M.
            </p>
            <div className="text-sm text-[var(--muted)] space-y-1">
              <div>• Complete compliance infrastructure</div>
              <div>• Vendor stack design (OMS, admin, prime broker)</div>
              <div>• Allocator-ready from day one</div>
            </div>
          </div>

          {/* Allocator Readiness */}
          <div className="forest-card p-6">
            <span className="forest-badge mb-3">Allocator Readiness</span>
            <h3 className="text-xl font-bold mb-3 text-[var(--grove)]">Pass Institutional ODD</h3>
            <p className="text-[var(--muted)] mb-4">
              DDQ/RFP automation (with human oversight), policy gap analysis, mock diligence sessions. 
              Built from 300+ reviews worth of pattern recognition.
            </p>
            <div className="text-sm text-[var(--muted)] space-y-1">
              <div>• We know every question they'll ask</div>
              <div>• We know what answers actually pass</div>
              <div>• We've been on both sides of the table</div>
            </div>
          </div>

          {/* Operations Infrastructure */}
          <div className="forest-card p-6">
            <span className="forest-badge mb-3">Operations Infrastructure</span>
            <h3 className="text-xl font-bold mb-3 text-[var(--grove)]">Production-Grade Systems</h3>
            <p className="text-[var(--muted)] mb-4">
              Not prototypes. Not demos. Real backends with PostgreSQL, SQLAlchemy, FastAPI. 
              Real frontends with Next.js and React. CORS, CRUD, proper endpoints.
            </p>
            <div className="text-sm text-[var(--muted)] space-y-1">
              <div>• Multi-model LLM routing with cost optimization</div>
              <div>• Vector search with FAISS for document intelligence</div>
              <div>• Responsible AI with human oversight built in</div>
            </div>
          </div>

          {/* AI + Human Hybrid */}
          <div className="forest-card p-6 bg-gradient-to-br from-[#f0f7f0] to-[#e8f5e8] dark:from-[#0f1511] dark:to-[#0f1410]">
            <span className="forest-badge mb-3">The Difference</span>
            <h3 className="text-xl font-bold mb-3 text-[var(--grove)]">You + AI, Not Just AI</h3>
            <p className="text-[var(--muted)] mb-4">
              <strong>When you need humans who've actually filled out DDQs, sat through ODD calls, 
              launched funds, and passed audits</strong> — that's when you call us.
            </p>
            <div className="text-sm text-[var(--muted)] space-y-1">
              <div>• AI for the repetitive work (reconciliation, compliance monitoring)</div>
              <div>• Humans for the judgment calls (policy design, ODD prep, fund launches)</div>
              <div>• Experience for what actually matters to allocators</div>
            </div>
          </div>

        </div>
      </section>

      {/* The Tech Stack */}
      <section className="py-8 md:py-12">
        <div className="forest-card p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[var(--grove)]">
            We Build With Production-Grade Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-[var(--grove)]">Backend</h3>
              <ul className="text-sm text-[var(--muted)] space-y-1">
                <li>• PostgreSQL + pgvector</li>
                <li>• SQLAlchemy ORM</li>
                <li>• FastAPI with CORS</li>
                <li>• Proper CRUD endpoints</li>
                <li>• JWT authentication</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-[var(--grove)]">AI Infrastructure</h3>
              <ul className="text-sm text-[var(--muted)] space-y-1">
                <li>• Multi-model routing (Claude, GPT-4, Gemini)</li>
                <li>• FAISS vector stores</li>
                <li>• OpenAI embeddings</li>
                <li>• Cost optimization logic</li>
                <li>• Instruction learning system</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-[var(--grove)]">Frontend</h3>
              <ul className="text-sm text-[var(--muted)] space-y-1">
                <li>• Next.js 14 with App Router</li>
                <li>• React with TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive design</li>
                <li>• Production deployment ready</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-[#f0f7f0] dark:bg-[#0f1410] rounded-lg border border-[var(--border)] text-center">
            <p className="text-[var(--muted)]">
              <strong className="text-[var(--grove)]">This isn't vaporware.</strong> The platform exists. 
              It's running. It's been tested in production environments.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Callout */}
      <section className="py-8 md:py-12">
        <div className="forest-card p-8 md:p-10 text-center bg-gradient-to-br from-[#e8f5e8] to-[#f0f7f0] dark:from-[#0f1511] dark:to-[#0f1410]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--grove)]">
            See What We've Actually Built
          </h2>
          <p className="text-lg text-[var(--muted)] mb-6 max-w-2xl mx-auto">
            Merewether: $0 to $150M. GMAM: Automated trade approvals for $100B pension. 
            Reconciliation platform: From paper trails to pattern trails.
          </p>
          <Link
            href="/case-studies"
            className="inline-block px-6 py-3 rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
          >
            Read the Case Studies
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--grove)]">
          Ready to Build Infrastructure That Passes ODD?
        </h2>
        <p className="text-lg text-[var(--muted)] mb-8 max-w-2xl mx-auto">
          Whether you're launching a fund, preparing for allocator diligence, or need operations infrastructure that actually scales — 
          we've done this before. Multiple times. Successfully.
        </p>
        <a
          href="https://calendly.com/chris-groveline"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-lg rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
        >
          Schedule a 20-Minute Call
        </a>
      </section>

    </div>
  );
}