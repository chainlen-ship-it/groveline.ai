import Link from 'next/link';

export const metadata = {
  title: 'Services & Pricing – Groveline.ai',
  description:
    'Clear outcomes. Fixed pricing. Launch with confidence. Institutional-grade operations infrastructure for emerging investment managers.',
};

export default function ServicesPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-16">
      {/* Header */}
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--grove)]">
          Services & <span className="text-[var(--forest)]">Pricing</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
          Clear outcomes. Fixed pricing. Launch with confidence.
        </p>
      </header>

      {/* Mission Section */}
      <section className="forest-card p-8 md:p-10 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--grove)] mb-6 text-center">
            We're here to raise the bar, not your costs
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-10 text-center">
            Too many emerging to mid-tier managers get squeezed—paying Big Service Provider rates for boilerplate solutions, or cutting corners that create real risk. We've spent years in the trenches doing diligence, launching funds, and seeing what actually protects you. Our mission is simple: help you build institutional-grade infrastructure with right-sized fees. Better infrastructure shouldn't be a luxury.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-[var(--grove)] mb-2">
                Risk Done Right
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Real protection, not checkbox compliance
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-lg font-bold text-[var(--grove)] mb-2">
                Industry Elevation
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Raising standards for everyone
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-lg font-bold text-[var(--grove)] mb-2">
                Cost Control
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Sophisticated work, sensible pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
        {/* Tier 1: Launch Ready */}
        <div className="forest-card p-8 flex flex-col hover:shadow-xl transition-shadow">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e8f5e8] dark:bg-[#1a2e1a] text-[var(--forest)] text-xs font-semibold uppercase tracking-wide mb-4">
            Perfect for: Emerging Managers
          </span>
          <h3 className="text-2xl font-bold text-[var(--grove)] mb-3">Launch Ready</h3>
          <p className="text-[var(--muted)] mb-6">
            Everything you need to get to market fast
          </p>
          <div className="mb-2">
            <span className="text-4xl font-bold text-[var(--grove)]">$1K–$3K</span>
          </div>
          <p className="text-sm text-[var(--muted)] mb-6">One-time project</p>

          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>Core compliance documents ready in 14 days</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>Professional data room setup</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>LP-ready presentation materials</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>Two rounds of revisions included</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>Email support throughout</span>
            </li>
          </ul>

          <a
            href="mailto:hello@groveline.ai?subject=Launch Ready Package&body=Hi Groveline,%0A%0AI'm interested in the Launch Ready package.%0A%0AFirm: ____%0ATarget launch date: ____%0APhone: ____%0AQuestions: ____%0A"
            className="block w-full px-6 py-3 text-center rounded-xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
          >
            Get started
          </a>
        </div>

        {/* Tier 2: Growth Partner (Popular) */}
        <div className="forest-card p-8 flex flex-col bg-gradient-to-br from-[#3d6b3d] to-[#4a7c4a] transform md:scale-105 hover:shadow-2xl transition-all relative">
          <span className="inline-block px-3 py-1 rounded-full bg-yellow-400 text-[#2d4a2d] text-xs font-semibold uppercase tracking-wide mb-4">
            Perfect for: Capital Raising
          </span>
          <h3 className="text-2xl font-bold mb-3 text-white">Growth Partner</h3>
          <p className="mb-6 text-white opacity-90">
            Complete infrastructure plus ongoing support
          </p>
          <div className="mb-2">
            <span className="text-4xl font-bold text-white">$12K–$18K</span>
          </div>
          <p className="text-sm text-white opacity-75 mb-6">Initial setup + 3-6 months support</p>

          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold text-lg mt-0.5">✓</span>
              <span className="text-white">Everything in Launch Ready</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold text-lg mt-0.5">✓</span>
              <span className="text-white">Advanced LP management systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold text-lg mt-0.5">✓</span>
              <span className="text-white">Quarterly compliance updates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold text-lg mt-0.5">✓</span>
              <span className="text-white">Priority response times</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold text-lg mt-0.5">✓</span>
              <span className="text-white">Strategic advisory calls</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold text-lg mt-0.5">✓</span>
              <span className="text-white">Due diligence preparation</span>
            </li>
          </ul>

          <a
            href="mailto:hello@groveline.ai?subject=Growth Partner Package&body=Hi Groveline,%0A%0AI'm interested in the Growth Partner package.%0A%0AFirm: ____%0ACurrent AUM/target: ____%0APhone: ____%0AQuestions: ____%0A"
            className="block w-full px-6 py-3 text-center rounded-xl bg-white text-[#3d6b3d] font-bold hover:bg-[#f5f9f5] transition-colors"
          >
            Partner with us
          </a>
        </div>

        {/* Tier 3: Institutional */}
        <div className="forest-card p-8 flex flex-col hover:shadow-xl transition-shadow">
          <span className="inline-block px-3 py-1 rounded-full bg-[#fff3cd] dark:bg-[#3a3020] text-[#856404] dark:text-[#ffd966] text-xs font-semibold uppercase tracking-wide mb-4">
            Perfect for: Policy Refresh
          </span>
          <h3 className="text-2xl font-bold text-[var(--grove)] mb-3">Institutional</h3>
          <p className="text-[var(--muted)] mb-6">
            Your extended operations team
          </p>
          <div className="mb-2">
            <span className="text-4xl font-bold text-[var(--grove)]">Custom</span>
          </div>
          <p className="text-sm text-[var(--muted)] mb-6">Retainer from $5K/month</p>

          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>White-glove dedicated support</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>Unlimited revisions and updates</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>System implementation support</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>Regulatory change monitoring</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>Strategic planning sessions</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--ink)]">
              <span className="text-[var(--forest)] font-bold text-lg mt-0.5">✓</span>
              <span>Same-day response guarantee</span>
            </li>
          </ul>

          <a
            href="mailto:hello@groveline.ai?subject=Institutional Package&body=Hi Groveline,%0A%0AI'm interested in the Institutional package.%0A%0AFirm: ____%0ACurrent AUM: ____%0APhone: ____%0ANeeds: ____%0A"
            className="block w-full px-6 py-3 text-center rounded-xl bg-white dark:bg-[var(--panel)] text-[var(--grove)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors"
          >
            Let's talk
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="forest-card p-10 md:p-12 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--grove)] mb-4">
          Ready to move fast?
        </h2>
        <p className="text-lg text-[var(--muted)] mb-8 max-w-2xl mx-auto">
          Schedule a 20-minute intro or email us. We'll confirm scope and timeline within one business day.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://outlook.office.com/bookwithme/user/1a049f8f31714e3e8efdf1ab744ed4d3@groveline.ai/meetingtype/guwMtq7wYkSN_8DLpJ5j3Q2?anonymous&ismsaljsauthenabled&ep=mlink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
          >
            Schedule a 20-minute Intro
          </a>
          <a
            href="mailto:hello@groveline.ai"
            className="inline-block px-8 py-4 text-lg rounded-2xl bg-white dark:bg-[var(--panel)] text-[var(--grove)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors"
          >
            Prefer email? hello@groveline.ai
          </a>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="forest-card p-6 text-center">
          <span className="text-lg font-bold text-[var(--grove)]">900+ ODD Reviews</span>
        </div>
        <div className="forest-card p-6 text-center">
          <span className="text-lg font-bold text-[var(--grove)]">Fund Launch Operator</span>
        </div>
        <div className="forest-card p-6 text-center">
          <span className="text-lg font-bold text-[var(--grove)]">SEC/FINRA Aware</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="forest-card p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--grove)] mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="pb-6 border-b border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--grove)] mb-2">
              What's the turnaround?
            </h3>
            <p className="text-[var(--muted)]">
              Most document prep items are 5–10 business days. Growth and Institutional packages start immediately after scoping.
            </p>
          </div>

          <div className="pb-6 border-b border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--grove)] mb-2">
              How do revisions work?
            </h3>
            <p className="text-[var(--muted)]">
              Two revisions within 14 days are included for fixed-fee items. Growth and Institutional packages include iterative updates as we ship.
            </p>
          </div>

          <div className="pb-6 border-b border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--grove)] mb-2">
              What's not included?
            </h3>
            <p className="text-[var(--muted)]">
              External vendor fees, filings, and legal opinions. We coordinate and integrate them into the plan.
            </p>
          </div>

          <div className="pb-6 border-b border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--grove)] mb-2">
              Can I switch tiers later?
            </h3>
            <p className="text-[var(--muted)]">
              Absolutely. Start small and upgrade anytime as your needs evolve. We'll credit your initial investment toward the next tier.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--grove)] mb-2">
              What if I just need one specific thing?
            </h3>
            <p className="text-[var(--muted)]">
              Reach out and let's talk. We can scope custom work for specific deliverables like a DDQ refresh or mock LP call prep.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-10">
        <Link
          href="/"
          className="text-sm text-[var(--muted)] hover:text-[var(--forest)] transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
