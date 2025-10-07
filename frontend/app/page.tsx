import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-0">
      {/* Hero Section */}
      <header className="py-14 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--grove)]">
          Institutional Readiness, Policy Refresh & SaaS Implementations
        </h1>
        <p className="max-w-[860px] mx-auto text-base md:text-lg text-[var(--muted)] mb-8">
          Fractional leadership and project delivery for emerging and mid-sized managers — plus vendor-side implementation support.
          Allocator-ready operations at realistic budgets.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          <a
            href="https://calendly.com/chris-groveline"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
          >
            Book a 20-minute intro
          </a>
          <a
            href="https://www.linkedin.com/in/chainlen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 rounded-2xl bg-[#f3faf3] dark:bg-[var(--panel)] text-[#1d3a22] dark:text-[var(--ink)] border border-[var(--border)] font-semibold hover:bg-[#e8f5e8] dark:hover:bg-[#243a28] transition-colors"
          >
            Connect on LinkedIn
          </a>
          <Link
            href="/case-studies"
            className="inline-block px-5 py-3 rounded-2xl bg-[#f3faf3] dark:bg-[var(--panel)] text-[#1d3a22] dark:text-[var(--ink)] border border-[var(--border)] font-semibold hover:bg-[#e8f5e8] dark:hover:bg-[#243a28] transition-colors"
          >
            See case studies
          </Link>
        </div>
      </header>

      {/* Stats Grid */}
      <section className="py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="forest-card p-6">
            <span className="forest-badge">Allocator Lens</span>
            <h3 className="text-xl md:text-2xl font-bold mt-3 mb-2">300+ ODD reviews</h3>
            <p className="text-[var(--muted)]">What passes and why — built into your ops.</p>
          </div>
          <div className="forest-card p-6">
            <span className="forest-badge">Launches</span>
            <h3 className="text-xl md:text-2xl font-bold mt-3 mb-2">$150M+ & $200M</h3>
            <p className="text-[var(--muted)]">Institutional commitments supported by robust workflows.</p>
          </div>
          <div className="forest-card p-6">
            <span className="forest-badge">Automation</span>
            <h3 className="text-xl md:text-2xl font-bold mt-3 mb-2">Ops that scale</h3>
            <p className="text-[var(--muted)]">Python/SQL to remove manual recs & approvals.</p>
          </div>
        </div>
      </section>

      {/* Featured Reconciliation Dashboard */}
      <section className="py-8 md:py-12">
        <div className="forest-card p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--grove)]">
            Featured: Reconciliation Assistant
          </h2>
          <figure>
            <Image
              src="/assets/reconciliation_dashboard.png"
              alt="AI-assisted reconciliation dashboard"
              width={1200}
              height={675}
              className="w-full rounded-2xl border border-[var(--border)]"
            />
            <figcaption className="text-sm text-[#5a7b60] dark:text-[var(--muted)] mt-3">
              AI-assisted file analysis and reconciliation flow.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[var(--grove)]">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="forest-card p-6">
            <h3 className="text-lg font-bold mb-2">Policy & DDQ Refresh</h3>
            <p className="text-[var(--muted)]">
              Compliance manuals, due diligence questionnaires, investor materials.
            </p>
          </div>
          <div className="forest-card p-6">
            <h3 className="text-lg font-bold mb-2">Systems & Implementation</h3>
            <p className="text-[var(--muted)]">
              OMS, reconciliation dashboards, SaaS integrations.
            </p>
          </div>
          <div className="forest-card p-6">
            <h3 className="text-lg font-bold mb-2">Project Support</h3>
            <p className="text-[var(--muted)]">
              Launch infrastructure, allocator readiness, workflow automation.
            </p>
          </div>
          <div className="forest-card p-6">
            <h3 className="text-lg font-bold mb-2">AI-Assisted COO Tools</h3>
            <p className="text-[var(--muted)]">
              Forensic accounting engine, automated reconciliation with tolerance rules,
              vector-based document search & retrieval.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="py-8 md:py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--grove)]">
          Case Studies & Insights
        </h2>
        <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
          Real examples of balancing rigor and pragmatism to get managers allocator-ready,
          plus practical guidance on AI governance and deployment.
        </p>
        <Link
          href="/case-studies"
          className="inline-block px-6 py-3 rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
        >
          Explore Case Studies
        </Link>
      </section>
    </div>
  );
}
