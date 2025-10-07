import Link from "next/link";

export const metadata = {
  title: "GMAM Risk Approval System – Groveline.ai",
  description: "SQL + Excel-based trade approval system that eliminated paper sign-offs and created an auditable workflow",
};

export default function GMAMCaseStudy() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-0 py-12">
      <Link href="/case-studies" className="text-forest hover:underline mb-6 inline-block">
        ← Back to Case Studies
      </Link>

      <div className="forest-card p-8 md:p-12 mb-8">
        <span className="forest-badge mb-4">Operations</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--grove)]">
          Case Study: GMAM – Risk Approval System
        </h1>
        <p className="text-lg text-[var(--muted)]">
          SQL + Excel-based trade approval system that eliminated paper sign-offs
        </p>
      </div>

      <div className="space-y-8">
        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Context</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            GMAM required portfolio managers to sign off on trades, but no system
            existed. Traders printed stacks and walked them around with zero
            tracking, creating real risk that trades could be missed.
          </p>
        </section>

        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">What We Did</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Built a lightweight SQL + Excel + Email workflow: nightly FTP import
            → SQL Server → Excel front-end for approvals → email alerts to PMs.
            Approvals were written back to the database for auditability.
          </p>
          <div className="bg-forest-mist dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
            <h3 className="font-semibold mb-2 text-[var(--grove)]">Technical Stack:</h3>
            <ul className="list-disc list-inside text-sm text-[var(--muted)] space-y-1">
              <li>Nightly FTP import from trading systems</li>
              <li>SQL Server for data storage and audit trail</li>
              <li>Excel VBA front-end for PM approvals</li>
              <li>Automated email notifications</li>
            </ul>
          </div>
        </section>

        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Result</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            The paper stacks disappeared. PMs saw their trades in context, risk
            had logs, and the policy finally worked without grinding the team.
          </p>
        </section>

        <section className="forest-card p-8 bg-gradient-to-br from-forest-mist to-forest-morning dark:from-[#0f1410] dark:to-[#0f1511]">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Takeaway</h2>
          <p className="text-[var(--ink)] dark:text-[var(--ink)] leading-relaxed text-lg">
            Use the tools at hand. Simple, inexpensive, effective solutions that
            fit how people already work often win out over chasing "perfect."
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
