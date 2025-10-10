export function AssessmentHero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('assessment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--grove)] leading-tight">
        Complimentary Operational Readiness Assessment
      </h1>
      <p className="text-xl md:text-2xl text-[var(--muted)] mb-4">
        Step 1: Identify Your Gaps
      </p>
      <p className="text-lg text-[var(--muted)] mb-6 max-w-3xl mx-auto">
        Discover how to strengthen your infrastructure for institutional allocators by starting with understanding where you are today.
      </p>
      <button
        onClick={scrollToForm}
        className="mt-6 px-8 py-4 text-lg rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
      >
        Start Assessment →
      </button>
    </div>
  );
}
