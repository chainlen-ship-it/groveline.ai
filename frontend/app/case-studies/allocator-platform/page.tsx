import Link from "next/link";

export const metadata = {
  title: "Allocator Platform – Groveline.ai",
  description: "Built institutional-grade platform to support a ~$200M allocation with integrated compliance and risk checks",
};

export default function AllocatorPlatformCaseStudy() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-0 py-12">
      <Link href="/case-studies" className="text-forest hover:underline mb-6 inline-block">
        ← Back to Case Studies
      </Link>

      <div className="forest-card p-8 md:p-12 mb-8">
        <span className="forest-badge mb-4">Institutional Infrastructure</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--grove)]">
          Allocator Platform — Institutional Infrastructure
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Building institutional-grade systems to support ~$200M allocation (Anonymized)
        </p>
        <p className="mt-4 text-sm text-[var(--grove)] font-semibold">Outcome: Supported ~$200M allocation with zero spreadsheet dependencies.</p>
      </div>

      <div className="space-y-8">
        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Project Overview</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Built institutional-grade platform to support a ~$200M allocation with integrated
            compliance and risk checks embedded into daily workflows. The project required
            transforming spreadsheet-based processes into a durable, auditable system.
          </p>
        </section>

        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Key Deliverables</h2>
          <div className="space-y-4">
            <div className="bg-forest-mist dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--grove)]">📊 Institutional-Grade Platform</h3>
              <p className="text-sm text-[var(--muted)]">
                Built comprehensive platform to support ~$200M allocation with robust data infrastructure
                and automated workflows.
              </p>
            </div>

            <div className="bg-forest-mist dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--grove)]">✅ Compliance & Risk Integration</h3>
              <p className="text-sm text-[var(--muted)]">
                Integrated compliance and risk checks directly into daily workflows, ensuring continuous
                monitoring and audit readiness.
              </p>
            </div>

            <div className="bg-forest-mist dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--grove)]">🗄️ SQL Schema & Reporting</h3>
              <p className="text-sm text-[var(--muted)]">
                Mapped diligence attributes into a durable SQL schema with comprehensive reporting
                capabilities for transparency and analysis.
              </p>
            </div>

            <div className="bg-forest-mist dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
              <h3 className="font-semibold mb-2 text-[var(--grove)]">📋 SOPs & Knowledge Transfer</h3>
              <p className="text-sm text-[var(--muted)]">
                Delivered comprehensive SOPs and conducted handover to internal team,
                significantly reducing spreadsheet risk and operational dependencies.
              </p>
            </div>
          </div>
        </section>

        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Impact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">~$200M</div>
              <div className="text-sm text-green-600 dark:text-green-500">Allocation Supported</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">Zero</div>
              <div className="text-sm text-blue-600 dark:text-blue-500">Spreadsheet Dependencies</div>
            </div>
          </div>
        </section>

        <section className="forest-card p-8 bg-gradient-to-br from-forest-mist to-forest-morning dark:from-[#0f1410] dark:to-[#0f1511]">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Confidentiality</h2>
          <p className="text-[var(--ink)] dark:text-[var(--ink)] leading-relaxed">
            Identifiers withheld by design. References available under NDA.
          </p>
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
