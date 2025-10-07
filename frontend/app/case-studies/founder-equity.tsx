import Link from "next/link";

export const metadata = {
  title: "Founder-Led Equity Fund – Groveline.ai",
  description: "Launch to institutional diligence supporting ~$150M commitment with comprehensive operating model and automation",
};

export default function FounderEquityCaseStudy() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-0 py-12">
      <Link href="/case-studies" className="text-forest hover:underline mb-6 inline-block">
        ← Back to Case Studies
      </Link>

      <div className="forest-card p-8 md:p-12 mb-8">
        <span className="forest-badge mb-4">Fund Launch</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--grove)]">
          Founder-Led Equity Fund — Launch to Institutional Diligence
        </h1>
        <p className="text-lg text-[var(--muted)]">
          From inception to ~$150M institutional commitment (Anonymized)
        </p>
      </div>

      <div className="space-y-8">
        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Project Overview</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Designed and implemented comprehensive operating model for a founder-led equity fund,
            from initial launch through institutional diligence, ultimately supporting a ~$150M commitment.
            The project balanced allocator-ready infrastructure with pragmatic execution.
          </p>
        </section>

        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Key Deliverables</h2>
          <div className="space-y-4">
            <div className="bg-forest-mist dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--grove)]">🏗️ Operating Model & Vendor Stack</h3>
              <p className="text-sm text-[var(--muted)]">
                Designed comprehensive operating model and vendor map. Negotiated and implemented
                OMS, administrator, and risk management stack tailored to fund strategy.
              </p>
            </div>

            <div className="bg-forest-mist dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--grove)]">📜 SEC Policy Framework</h3>
              <p className="text-sm text-[var(--muted)]">
                Wrote and implemented complete SEC policy stack with embedded surveillance
                and attestation processes to ensure ongoing compliance.
              </p>
            </div>

            <div className="bg-forest-mist dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--grove)]">📁 Allocator Diligence Room</h3>
              <p className="text-sm text-[var(--muted)]">
                Prepared comprehensive allocator diligence room and DDQ materials,
                supporting successful institutional due diligence process.
              </p>
            </div>

            <div className="bg-forest-mist dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--grove)]">⚙️ Automation & Efficiency</h3>
              <p className="text-sm text-[var(--muted)]">
                Implemented automation for approvals, reconciliations, and reporting to
                significantly reduce ongoing operational costs.
              </p>
            </div>
          </div>
        </section>

        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Impact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">~$150M</div>
              <div className="text-sm text-green-600 dark:text-green-500">Institutional Commitment</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">Full Stack</div>
              <div className="text-sm text-blue-600 dark:text-blue-500">Launch to Diligence</div>
            </div>
          </div>
        </section>

        <section className="forest-card p-8 bg-gradient-to-br from-forest-mist to-forest-morning dark:from-[#0f1410] dark:to-[#0f1511]">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Takeaway</h2>
          <p className="text-[var(--ink)] dark:text-[var(--ink)] leading-relaxed text-lg mb-4">
            Successful fund launches require more than just good investment strategy.
            The right operational foundation — from vendor selection to compliance infrastructure
            to automation — enables founders to focus on what they do best while meeting
            institutional standards.
          </p>
          <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-[var(--border)] mt-4">
            <p className="text-sm text-[var(--muted)] italic">
              Identifiers withheld by design. References available under NDA.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/case-studies"
          className="inline-block px-6 py-3 rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
        >
          View All Case Studies
        </Link>
      </div>
    </div>
  );
}
