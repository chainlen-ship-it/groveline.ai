import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Case Studies – Groveline.ai",
  description: "Real examples of balancing rigor and pragmatism to get managers allocator-ready",
};

export default function CaseStudiesPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-0 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-[var(--grove)]">
        Case Studies & Insights
      </h1>
      <p className="text-center text-[var(--muted)] mb-12 max-w-3xl mx-auto">
        Real examples of balancing institutional rigor with pragmatic execution,
        helping managers get allocator-ready without the overhead.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* GMAM Case Study */}
        <Link href="/case-studies/gmam" className="forest-card p-6 hover:shadow-xl transition-shadow">
          <span className="forest-badge">Operations</span>
          <h3 className="text-xl font-bold mt-4 mb-3">GMAM – Risk Approval System</h3>
          <p className="text-[var(--muted)] mb-4">
            SQL + Excel-based trade approval system that eliminated paper sign-offs and created an auditable workflow.
          </p>
          <span className="text-forest font-semibold hover:underline">Read case study →</span>
        </Link>

        {/* BBT Case Study */}
        <Link href="/case-studies/bbt" className="forest-card p-6 hover:shadow-xl transition-shadow">
          <span className="forest-badge">Automation</span>
          <h3 className="text-xl font-bold mt-4 mb-3">BBT – Option Expiry Workflow</h3>
          <p className="text-[var(--muted)] mb-4">
            Automated option expiry workflow that reduced a 5-person job to a 1-hour solo process.
          </p>
          <span className="text-forest font-semibold hover:underline">Read case study →</span>
        </Link>

        {/* Institutional vs Pragmatic */}
        <Link href="/case-studies/institutional-vs-pragmatic" className="forest-card p-6 hover:shadow-xl transition-shadow">
          <span className="forest-badge">Strategy</span>
          <h3 className="text-xl font-bold mt-4 mb-3">Institutional vs Pragmatic Launches</h3>
          <p className="text-[var(--muted)] mb-4">
            Lessons from building allocator-ready systems for both institutional-grade and founder-led funds.
          </p>
          <span className="text-forest font-semibold hover:underline">Read case study →</span>
        </Link>

        {/* Allocator Platform */}
        <Link href="/case-studies/allocator-platform" className="forest-card p-6 hover:shadow-xl transition-shadow">
          <span className="forest-badge">Institutional Infrastructure</span>
          <h3 className="text-xl font-bold mt-4 mb-3">Allocator Platform (Anon.)</h3>
          <p className="text-[var(--muted)] mb-4">
            Built institutional-grade platform to support ~$200M allocation with integrated compliance and risk checks.
          </p>
          <span className="text-forest font-semibold hover:underline">Read case study →</span>
        </Link>

        {/* Founder Equity */}
        <Link href="/case-studies/founder-equity" className="forest-card p-6 hover:shadow-xl transition-shadow">
          <span className="forest-badge">Fund Launch</span>
          <h3 className="text-xl font-bold mt-4 mb-3">Founder-Led Equity Fund (Anon.)</h3>
          <p className="text-[var(--muted)] mb-4">
            Launch to institutional diligence supporting ~$150M commitment with comprehensive operating model.
          </p>
          <span className="text-forest font-semibold hover:underline">Read case study →</span>
        </Link>
      </div>

      {/* Insights Section */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--grove)]">
          Insights & Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI Governance */}
          <div className="forest-card p-6">
            <span className="forest-badge">AI Governance</span>
            <h3 className="text-xl font-bold mt-4 mb-3">AI Governance is Now a Regulatory Requirement</h3>
            <p className="text-[var(--muted)] mb-4">
              Understanding the regulatory landscape for AI deployment in financial services —
              from SEC guidance to practical implementation frameworks.
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-2 list-disc list-inside">
              <li>Auditable AI decision trails</li>
              <li>API-controlled deployments</li>
              <li>Compliance with SEC/regulatory guidance</li>
            </ul>
          </div>

          {/* AI Deployment Guide */}
          <div className="forest-card p-6">
            <span className="forest-badge">Implementation</span>
            <h3 className="text-xl font-bold mt-4 mb-3">AI Deployment Guide for Financial Operations</h3>
            <p className="text-[var(--muted)] mb-4">
              Practical framework for responsible AI deployment in fund operations —
              reconciliation automation, document search, and forensic accounting.
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-2 list-disc list-inside">
              <li>Tolerance rules & exception handling</li>
              <li>Vector-based document retrieval</li>
              <li>Forensic accounting engines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mt-12">
        <div className="forest-card p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">
            From Paper to Data: Transformation in Action
          </h2>
          <figure>
            <Image
              src="/assets/paper_to_data.png"
              alt="Paper to data transformation"
              width={1200}
              height={675}
              className="w-full rounded-2xl border border-[var(--border)]"
            />
            <figcaption className="text-sm text-[#5a7b60] dark:text-[var(--muted)] mt-3">
              Moving from manual paper processes to automated, auditable data workflows.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">
          Ready to Get Allocator-Ready?
        </h2>
        <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
          Let's discuss how we can help your fund balance institutional polish with pragmatic execution.
        </p>
        <a
          href="https://calendly.com/chris-groveline"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
        >
          Book a 20-minute intro
        </a>
      </section>
    </div>
  );
}
