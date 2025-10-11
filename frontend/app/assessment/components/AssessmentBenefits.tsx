export function AssessmentBenefits() {
  return (
    <>
      {/* Chicken/Egg Box */}
      <div className="forest-card p-8 md:p-10 mb-10 bg-gradient-to-br from-[#f5f5f5] to-[#e8f5e8] dark:from-[#1a1f1b] dark:to-[#0f1511] border-l-4 border-[var(--forest)]">
        <p className="text-lg text-[var(--ink)] leading-relaxed mb-4">
          It's the classic chicken-or-egg question: Do you build strong operations to attract investors, or to protect your fund from failure?
        </p>
        <p className="text-lg font-semibold text-[var(--grove)]">
          That is all academic, and it doesn't matter which comes first. The priority is efficient, risk mitigating, institutional-quality infrastructure that you need either way.
        </p>
      </div>

      {/* Statistics */}
      <div className="forest-card p-8 md:p-10 mb-10">
        <p className="text-lg text-[var(--muted)] mb-6">
          More than 60% of executives indicate that poor due diligence is the main reason for deal failure.<sup>¹</sup>
        </p>
      </div>

      {/* Readiness Hook */}
      <div className="forest-card p-8 md:p-10 mb-10 bg-gradient-to-br from-[#e8f5e8] to-[#f0f7f0] dark:from-[#0f1511] dark:to-[#0f1410]">
        <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">We Can Help You Build a Solid Infrastructure</h2>
        <p className="text-lg text-[var(--muted)] mb-6">
          Our assessment evaluates your operational infrastructure across the key areas allocators scrutinize:
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
          ⏱️ Takes 3-5 minutes • Get your score + custom insights instantly
        </p>
      </div>
    </>
  );
}
