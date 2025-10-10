export function AssessmentBenefits() {
  return (
    <>
      {/* Frustration Hook */}
      <div className="forest-card p-8 md:p-10 mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[var(--grove)]">
          The Hidden Costs of Inadequate Operations
        </h2>
        <div className="space-y-4 text-[var(--muted)]">
          <p className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">❌</span>
            <span>
              <strong className="text-[var(--ink)]">Lost allocations:</strong> Allocators walk away
              from 60% of funds during operational due diligence
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">💸</span>
            <span>
              <strong className="text-[var(--ink)]">Overpaying for basics:</strong> Traditional
              vendors charge 2-3x what smart, modular architectures cost
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">⏰</span>
            <span>
              <strong className="text-[var(--ink)]">Manual inefficiency:</strong> Operations teams
              waste 15-20 hours/week on tasks that could be automated
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">🚨</span>
            <span>
              <strong className="text-[var(--ink)]">Compliance gaps:</strong> Small oversights in
              documentation can derail months of fundraising
            </span>
          </p>
        </div>
      </div>

      {/* Readiness Hook */}
      <div className="forest-card p-8 md:p-10 mb-10 bg-gradient-to-br from-[#e8f5e8] to-[#f0f7f0] dark:from-[#0f1511] dark:to-[#0f1410]">
        <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Find Out Where You Stand</h2>
        <p className="text-lg text-[var(--muted)] mb-6">
          Our 15-question assessment evaluates your operational infrastructure across the key areas
          allocators scrutinize:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[var(--forest)]" aria-hidden="true">✓</span>
            <span className="text-sm">Compliance & Documentation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--forest)]" aria-hidden="true">✓</span>
            <span className="text-sm">Risk Management</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--forest)]" aria-hidden="true">✓</span>
            <span className="text-sm">Technology Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--forest)]" aria-hidden="true">✓</span>
            <span className="text-sm">Vendor Selection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--forest)]" aria-hidden="true">✓</span>
            <span className="text-sm">Operational Efficiency</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--forest)]" aria-hidden="true">✓</span>
            <span className="text-sm">Allocator Readiness</span>
          </div>
        </div>
        <p className="text-[var(--grove)] font-semibold">
          ⏱️ Takes 5-7 minutes • Get your score + custom insights instantly
        </p>
      </div>
    </>
  );
}
