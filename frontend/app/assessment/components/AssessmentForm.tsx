export function AssessmentForm() {
  return (
    <div className="forest-card p-8 md:p-10 text-center">
      <h2 className="text-2xl font-bold mb-6 text-[var(--grove)]">
        Coming Soon
      </h2>
      <p className="text-lg text-[var(--muted)] mb-6">
        Our assessment tool is currently being updated. Please check back shortly.
      </p>
      <p className="text-sm text-[var(--muted)]">
        For immediate assistance, please <a href="mailto:hello@groveline.ai" className="text-[var(--forest)] hover:underline">contact us directly</a>.
      </p>
    </div>
  );
}
