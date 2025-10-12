import Link from 'next/link';

export const metadata = {
  title: 'Services – Groveline.ai',
  description:
    'Operator‑led services for allocator‑ready operations: fund launch infrastructure, compliance & governance, vendor architecture, automation, and ODD prep.',
};

export default function ServicesPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-0 py-12 md:py-16">
      {/* Hero */}
      <header className="text-center mb-10 md:mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--grove)] leading-tight">
          Operator‑Led Services for Institutional Operations
        </h1>
        <p className="max-w-[900px] mx-auto text-lg md:text-xl text-[var(--muted)]">
          We build allocator‑ready infrastructure with pragmatic, time‑respecting execution. Short cycles, clear outcomes, and clean handoffs.
        </p>
      </header>

      {/* How We Work */}
      <section className="forest-card p-6 md:p-8 mb-10 bg-gradient-to-r from-[#e8f5e8] to-[#f0f7f0] dark:from-[#0f1511] dark:to-[#0f1410] border-l-4 border-[var(--forest)]">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[var(--grove)]">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-[var(--muted)]">
          <div>
            <div className="font-semibold text-[var(--grove)] mb-1">1) 20‑minute intro</div>
            <div>Scope your goals and timing.</div>
          </div>
          <div>
            <div className="font-semibold text-[var(--grove)] mb-1">2) Plan & options</div>
            <div>Clear deliverables with fixed‑fee options.</div>
          </div>
          <div>
            <div className="font-semibold text-[var(--grove)] mb-1">3) Execution</div>
            <div>Weekly updates. Operator‑to‑operator.</div>
          </div>
          <div>
            <div className="font-semibold text-[var(--grove)] mb-1">4) Handover</div>
            <div>Clean docs + SOPs for your team.</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="space-y-8">
        <div className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Fund Launch Infrastructure</h2>
          <ul className="list-disc list-inside text-[var(--muted)] space-y-2">
            <li>Operating model, governance, and vendor map</li>
            <li>SEC registration support and policy stack design</li>
            <li>Admin, audit, legal, and banking selection</li>
            <li>Initial data room and DDQ materials</li>
          </ul>
        </div>

        <div className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Compliance & Governance</h2>
          <ul className="list-disc list-inside text-[var(--muted)] space-y-2">
            <li>Policy stack with surveillance and attestations</li>
            <li>Personal trading / pre‑clearance workflows</li>
            <li>Valuation, expense, and conflict frameworks</li>
            <li>Audit readiness and documentation</li>
          </ul>
        </div>

        <div className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Operations & Automation</h2>
          <ul className="list-disc list-inside text-[var(--muted)] space-y-2">
            <li>OMS/PMS integration and control design</li>
            <li>Admin oversight, NAV controls, cash movement</li>
            <li>Dual‑control processes and reconciliations</li>
            <li>Exception‑based reconciliations and alerts</li>
            <li>KPI dashboards for operations and compliance</li>
            <li>Document search and diligence prep automation</li>
            <li>SEC filing checks and evidence trails</li>
            <li>Cost‑efficient stack at ~60% of traditional</li>
          </ul>
        </div>

        <div className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Allocator Readiness & ODD Prep</h2>
          <ul className="list-disc list-inside text-[var(--muted)] space-y-2">
            <li>DDQ, policies, and evidence packaging</li>
            <li>Mock ODD and process walkthroughs</li>
            <li>Data room structure and version control</li>
            <li>On‑site or virtual allocator Q&A support</li>
          </ul>
        </div>

        <div className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Fractional Leadership (COO/CFO/CCO)</h2>
          <ul className="list-disc list-inside text-[var(--muted)] space-y-2">
            <li>Part‑time leadership with operator cadence</li>
            <li>Board and LP reporting support</li>
            <li>Regulatory liaison and audit interface</li>
            <li>Team up‑leveling and handover plan</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--grove)]">Want operator‑level clarity?</h2>
        <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
          Schedule a 20‑minute intro. We’ll map your next steps and share a concise plan.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://outlook.office.com/bookwithme/user/1a049f8f31714e3e8efdf1ab744ed4d3@groveline.ai/meetingtype/guwMtq7wYkSN_8DLpJ5j3Q2?anonymous&ismsaljsauthenabled&ep=mlink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
          >
            Schedule a 20‑minute Intro
          </a>
          <a
            href="mailto:hello@groveline.ai"
            className="inline-block px-8 py-4 text-lg rounded-2xl bg-white dark:bg-[var(--panel)] text-[#1d3a22] dark:text-[var(--ink)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors"
          >
            Prefer email? hello@groveline.ai
          </a>
        </div>
      </section>
    </div>
  );
}
