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
          Services & Pricing
        </h1>
        <p className="max-w-[900px] mx-auto text-lg md:text-xl text-[var(--muted)]">
          Clear scopes. Fixed‑fee options. Operator‑led delivery.
        </p>
      </header>

      {/* Three Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Document Prep */}
        <div className="forest-card p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2 text-[var(--grove)]">Document Prep (Fast & Fixed‑Fee)</h2>
          <p id="doc-scope" className="text-xs text-[var(--muted)] mt-2 mb-3">Standard inputs, two revisions in 14 days, editable files. Rush available.</p>
          <p className="text-sm text-[var(--muted)] mb-4">Fast, allocator‑friendly, fixed price.</p>
          <ul className="text-[var(--muted)] space-y-3">
            <li className="flex items-start justify-between gap-3">
              <span>DDQ Accelerator</span>
              <span className="flex items-baseline gap-2">
                <a
                  href={`mailto:hello@groveline.ai?subject=Start DDQ Accelerator&body=Hi Groveline,%0A%0AI'd like to start DDQ Accelerator.%0A%0AFirm: ____%0ADocs URL: ____%0APhone: ____%0APreferred window: ____%0AQuestions: ____%0A%0APrice: $1,000 (acknowledged)`}
                  aria-label="Email to start DDQ Accelerator"
                  className="font-bold underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-[var(--forest)] rounded"
                >
                  $1,000
                </a>
                <span className="text-xs">Saves ~20–40 hours</span>
              </span>
            </li>

            <li className="flex items-start justify-between gap-3">
              <span>Ops DD Lite</span>
              <span className="flex items-baseline gap-2">
                <a
                  href={`mailto:hello@groveline.ai?subject=Start Ops DD Lite&body=Hi Groveline,%0A%0AI'd like Ops DD Lite.%0A%0AFirm: ____%0AStrategy/vehicle: ____%0AKey docs: ____%0APhone: ____%0APreferred window: ____%0AQuestions: ____%0A%0APrice: $1,500 (acknowledged)`}
                  aria-label="Email to start Ops DD Lite"
                  className="font-bold underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-[var(--forest)] rounded"
                >
                  $1,500
                </a>
                <span className="text-xs">Saves ~25–50 hours</span>
              </span>
            </li>

            <li className="flex items-start justify-between gap-3">
              <span>Policy Modernization</span>
              <span className="flex items-baseline gap-2">
                <a
                  href={`mailto:hello@groveline.ai?subject=Start Policy Modernization&body=Hi Groveline,%0A%0AWe need policy updates (AI, cyber, valuation, BCP, personal trading).%0A%0AFirm: ____%0ACurrent policy locations: ____%0APhone: ____%0APreferred window: ____%0AQuestions: ____%0A%0APrice: $1,500–$3,000 (acknowledged)`}
                  aria-label="Email to start Policy Modernization"
                  className="font-bold underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-[var(--forest)] rounded"
                >
                  $1,500–$3,000
                </a>
                <span className="text-xs">Saves ~15–30 hours</span>
              </span>
            </li>

            <li className="flex items-start justify-between gap-3">
              <span>Mock LP Diligence Call</span>
              <span className="flex items-baseline gap-2">
                <a
                  href={`mailto:hello@groveline.ai?subject=Schedule Mock LP Diligence Call&body=Hi Groveline,%0A%0APlease schedule a mock LP diligence call.%0A%0AFirm: ____%0ATeam attendees: ____%0APhone: ____%0APreferred window: ____%0AQuestions: ____%0A%0APrice: $500 (acknowledged)`}
                  aria-label="Email to schedule Mock LP Diligence Call"
                  className="font-bold underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-[var(--forest)] rounded"
                >
                  $500
                </a>
                <span className="text-xs">Saves ~5–10 hours</span>
              </span>
            </li>

            <li className="flex items-start justify-between gap-3">
              <span>Data Room Setup</span>
              <span className="flex items-baseline gap-2">
                <a
                  href={`mailto:hello@groveline.ai?subject=Start Data Room Setup&body=Hi Groveline,%0A%0APlease help structure our data room.%0A%0AFirm: ____%0ARepository link: ____%0APhone: ____%0APreferred window: ____%0AQuestions: ____%0A%0APrice: $500 (acknowledged)`}
                  aria-label="Email to start Data Room Setup"
                  className="font-bold underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-[var(--forest)] rounded"
                >
                  $500
                </a>
                <span className="text-xs">Saves ~6–12 hours</span>
              </span>
            </li>

            <li className="flex items-start justify-between gap-3">
              <span>ADV & Web Sweep</span>
              <span className="flex items-baseline gap-2">
                <a
                  href={`mailto:hello@groveline.ai?subject=Start ADV and Web Sweep&body=Hi Groveline,%0A%0APlease review our ADV vs website and socials.%0A%0AFirm: ____%0ALinks: ____%0APhone: ____%0APreferred window: ____%0AQuestions: ____%0A%0APrice: $750 (acknowledged)`}
                  aria-label="Email to start ADV and Web Sweep"
                  className="font-bold underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-[var(--forest)] rounded"
                >
                  $750
                </a>
                <span className="text-xs">Saves ~8–12 hours</span>
              </span>
            </li>
          </ul>
          <p className="text-xs text-[var(--muted)] mt-2">ROI ranges are typical; actual varies by inputs and scope.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://outlook.office.com/bookwithme/user/1a049f8f31714e3e8efdf1ab744ed4d3@groveline.ai/meetingtype/guwMtq7wYkSN_8DLpJ5j3Q2?anonymous&ismsaljsauthenabled&ep=mlink"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a 20‑minute Intro for Document Prep"
              aria-describedby="doc-scope"
              className="px-4 py-2 rounded-xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-[var(--forest)]"
            >
              Start a 20‑minute Intro
            </a>
            <a
              href="mailto:hello@groveline.ai?subject=Document Prep"
              aria-label="Email about Document Prep"
              className="px-4 py-2 rounded-xl bg-white dark:bg-[var(--panel)] text-[var(--grove)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--forest)]"
            >
              Email us
            </a>
          </div>
        </div>

        {/* Card 2: Bundled Doc Prep */}
        <div className="forest-card p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2 text-[var(--grove)]">Bundle & Save Time</h2>
          <p id="bundle-scope" className="text-xs text-[var(--muted)] mt-2 mb-3">Standard inputs, two revisions in 14 days, editable files. Rush available.</p>
          <p className="text-sm text-[var(--muted)] mb-4">Pick two or more. One plan, one timeline, one review call.</p>
          <ul className="list-disc pl-5 text-[var(--muted)] space-y-2">
            <li><strong>Raise Ready</strong>: DDQ + Ops DD Lite + Data Room</li>
            <li><strong>Compliance Core</strong>: Calendar + Policy Modernization</li>
            <li><strong>Launch Readiness</strong>: Ops DD Lite + ADV/Web + Mock LP</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:hello@groveline.ai?subject=Bundle pricing&body=We are considering: [Raise Ready | Compliance Core | Launch Readiness].%0AOur target date is ____.`}
              aria-label="Email to request bundle pricing"
              className="px-4 py-2 rounded-xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
            >
              Contact sales for bundle
            </a>
            <a href="#intake" className="px-4 py-2 rounded-xl bg-white dark:bg-[var(--panel)] text-[var(--grove)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors">See intake checklist</a>
          </div>
          <p className="text-xs text-[var(--muted)] mt-4">Scope guardrails: standard inputs, two revisions in 14 days, editable files included. Rush available.</p>
        </div>

        {/* Card 3: Ongoing Services Packs */}
        <div className="forest-card p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2 text-[var(--grove)]">Ongoing Services (Drawdown Packs)</h2>
          <p id="packs-scope" className="text-xs text-[var(--muted)] mt-2 mb-3">Standard inputs, two revisions in 14 days, editable files. Rush available.</p>
          <p className="text-sm text-[var(--muted)] mb-4">Outcome‑based work at a simple rate.</p>
          <div className="space-y-3">
            <div className="flex items-start justify-between p-3 rounded-lg border border-[var(--border)] bg-white/60 dark:bg-[#0f1410]">
              <div>
                <div className="font-semibold text-[var(--ink)]">Focused Pack</div>
                <div className="text-xs text-[var(--muted)]">10 hours for targeted work</div>
              </div>
              <div className="font-bold">$3,000</div>
            </div>
            <div className="flex items-start justify-between p-3 rounded-lg border border-[var(--border)] bg-white/60 dark:bg-[#0f1410]">
              <div>
                <div className="font-semibold text-[var(--ink)]">Growth Pack</div>
                <div className="text-xs text-[var(--muted)]">30 hours for deeper push</div>
              </div>
              <div className="font-bold">$9,000</div>
            </div>
            <div className="flex items-start justify-between p-3 rounded-lg border border-[var(--border)] bg-white/60 dark:bg-[#0f1410]">
              <div>
                <div className="font-semibold text-[var(--ink)]">Scale Pack</div>
                <div className="text-xs text-[var(--muted)]">50 hours for multi‑stream initiatives</div>
              </div>
              <div className="font-bold">$15,000</div>
            </div>
          </div>
          <p className="text-xs text-[var(--muted)] mt-3">Rate is $300/hour across packs. Retainers available on request.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="mailto:hello@groveline.ai?subject=Ongoing Services Packs" className="px-4 py-2 rounded-xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity">Get a pack</a>
            <a href="mailto:hello@groveline.ai?subject=Ask about Retainer" className="px-4 py-2 rounded-xl bg-white dark:bg-[var(--panel)] text-[var(--grove)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors">Ask about a retainer</a>
          </div>
        </div>
      </section>

      {/* Optional intake checklist */}
      <section id="intake" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="forest-card p-6">
          <h3 className="font-semibold text-[var(--grove)] mb-2">Core docs</h3>
          <p className="text-sm text-[var(--muted)]">PPM/OM, Compliance Manual, Code of Ethics, Valuation, BCP/DR, Cyber, Trade & Allocation, Org chart, Provider list, ADV.</p>
        </div>
        <div className="forest-card p-6">
          <h3 className="font-semibold text-[var(--grove)] mb-2">Access</h3>
          <p className="text-sm text-[var(--muted)]">Data room link (view access) and a single point of contact for clarifications.</p>
        </div>
        <div className="forest-card p-6">
          <h3 className="font-semibold text-[var(--grove)] mb-2">Deliverables</h3>
          <p className="text-sm text-[var(--muted)]">Editable docs, prioritized gaps list, and a one‑hour walkthrough.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--grove)]">Ready to move fast?</h2>
        <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">Schedule a 20‑minute intro or email us. We’ll confirm scope and timeline within one business day.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://outlook.office.com/bookwithme/user/1a049f8f31714e3e8efdf1ab744ed4d3@groveline.ai/meetingtype/guwMtq7wYkSN_8DLpJ5j3Q2?anonymous&ismsaljsauthenabled&ep=mlink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule a 20‑minute Intro"
            aria-describedby="doc-scope bundle-scope packs-scope"
            className="inline-block px-8 py-4 text-lg rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-[var(--forest)]"
          >
            Schedule a 20‑minute Intro
          </a>
          <a
            href="mailto:hello@groveline.ai"
            aria-label="Email hello@groveline.ai"
            className="inline-block px-8 py-4 text-lg rounded-2xl bg-white dark:bg-[var(--panel)] text-[#1d3a22] dark:text-[var(--ink)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--forest)]"
          >
            Prefer email? hello@groveline.ai
          </a>
        </div>
      </section>

      {/* Trust strip */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="forest-card p-4 text-center">
          <span className="text-sm font-semibold text-[var(--grove)]">300+ diligence reviews</span>
        </div>
        <div className="forest-card p-4 text-center">
          <span className="text-sm font-semibold text-[var(--grove)]">Fund launch operator</span>
        </div>
        <div className="forest-card p-4 text-center">
          <span className="text-sm font-semibold text-[var(--grove)]">SEC/FINRA aware</span>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="mt-8 space-y-4">
        <h3 className="text-xl font-bold text-[var(--grove)]">FAQ</h3>
        <div className="forest-card p-4">
          <p className="font-semibold text-[var(--ink)]">What’s the turnaround?</p>
          <p className="text-sm text-[var(--muted)]">Most document prep items are 5–10 business days. Packs start immediately after scoping.</p>
        </div>
        <div className="forest-card p-4">
          <p className="font-semibold text-[var(--ink)]">How do revisions work?</p>
          <p className="text-sm text-[var(--muted)]">Two revisions within 14 days are included for fixed‑fee items. Packs include iterative updates as we ship.</p>
        </div>
        <div className="forest-card p-4">
          <p className="font-semibold text-[var(--ink)]">What’s not included?</p>
          <p className="text-sm text-[var(--muted)]">External vendor fees, filings, and legal opinions. We coordinate and integrate them into the plan.</p>
        </div>
      </section>

      {/* JSON‑LD Offers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'Product', name: 'DDQ Accelerator', offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1000', availability: 'https://schema.org/InStock' } },
              { '@type': 'Product', name: 'Ops DD Lite', offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1500', availability: 'https://schema.org/InStock' } },
              { '@type': 'Product', name: 'Policy Modernization', offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1500', availability: 'https://schema.org/InStock' } },
              { '@type': 'Product', name: 'Mock LP Diligence Call', offers: { '@type': 'Offer', priceCurrency: 'USD', price: '500', availability: 'https://schema.org/InStock' } },
              { '@type': 'Product', name: 'Data Room Setup', offers: { '@type': 'Offer', priceCurrency: 'USD', price: '500', availability: 'https://schema.org/InStock' } },
              { '@type': 'Product', name: 'ADV & Web Sweep', offers: { '@type': 'Offer', priceCurrency: 'USD', price: '750', availability: 'https://schema.org/InStock' } },
              { '@type': 'Product', name: 'Focused Pack (10h)', offers: { '@type': 'Offer', priceCurrency: 'USD', price: '3000', availability: 'https://schema.org/InStock' } },
              { '@type': 'Product', name: 'Growth Pack (30h)', offers: { '@type': 'Offer', priceCurrency: 'USD', price: '9000', availability: 'https://schema.org/InStock' } },
              { '@type': 'Product', name: 'Scale Pack (50h)', offers: { '@type': 'Offer', priceCurrency: 'USD', price: '15000', availability: 'https://schema.org/InStock' } },
            ],
          }),
        }}
      />
    </div>
  );
}
