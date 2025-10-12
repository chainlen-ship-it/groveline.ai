export function AssessmentCredibility() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-[var(--grove)]">
        Built by Operators Who've Been in the Trenches
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="forest-card p-6 text-center">
          <div className="text-4xl font-bold text-[var(--forest)] mb-2">900+</div>
          <div className="text-sm text-[var(--muted)]">ODD Reviews Conducted</div>
        </div>
        <div className="forest-card p-6 text-center">
          <div className="text-4xl font-bold text-[var(--forest)] mb-2">$350M+</div>
          <div className="text-sm text-[var(--muted)]">Raised by Clients</div>
        </div>
        <div className="forest-card p-6 text-center">
          <div className="text-4xl font-bold text-[var(--forest)] mb-2">60%</div>
          <div className="text-sm text-[var(--muted)]">Cost Savings vs Traditional</div>
        </div>
      </div>
    </div>
  );
}
