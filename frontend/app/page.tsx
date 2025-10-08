import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-0">
      {/* Hero Section */}
      <header className="py-14 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--grove)] leading-tight">
          Institutional Operations Infrastructure, <br /> Enhanced by AI
        </h1>
        <p className="max-w-[900px] mx-auto text-xl md:text-2xl text-[var(--ink)] mb-8 leading-relaxed">
          We help emerging investment managers build institutional-grade operations infrastructure that passes allocator due diligence—at 60% of traditional costs.
        </p>

        {/* Quick Stats Badges */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <span className="forest-badge text-sm">300+ ODD Reviews</span>
          <span className="forest-badge text-sm">$150M+ Raised</span>
          <span className="forest-badge text-sm">Allocator-Ready</span>
          <span className="forest-badge text-sm">AI-Enhanced</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          <a
            href="https://outlook.office.com/bookwithme/user/1a049f8f31714e3e8efdf1ab744ed4d3@groveline.ai/meetingtype/guwMtq7wYkSN_8DLpJ5j3Q2?anonymous&ismsaljsauthenabled&ep=mlink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
          >
            Schedule Discovery Call
          </a>
          <Link
            href="/case-studies"
            className="inline-block px-6 py-3 rounded-2xl bg-[#f3faf3] dark:bg-[var(--panel)] text-[#1d3a22] dark:text-[var(--ink)] border border-[var(--border)] font-semibold hover:bg-[#e8f5e8] dark:hover:bg-[#243a28] transition-colors"
          >
            View Case Studies
          </Link>
        </div>
      </header>

      {/* Why Emerging Managers Choose Groveline */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--grove)]">
          Why Emerging Managers Choose Groveline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="forest-card p-8 text-center">
            <div className="text-5xl md:text-6xl font-bold text-[var(--forest)] mb-3">60%</div>
            <div className="text-lg font-semibold text-[var(--grove)] mb-2">Cost Savings vs. Traditional Vendors</div>
            <p className="text-sm text-[var(--muted)]">
              Modular architecture and smart vendor selection deliver institutional quality at mid-market pricing
            </p>
          </div>
          <div className="forest-card p-8 text-center">
            <div className="text-5xl md:text-6xl font-bold text-[var(--forest)] mb-3">2</div>
            <div className="text-lg font-semibold text-[var(--grove)] mb-2">Funds Launched to $150M+</div>
            <p className="text-sm text-[var(--muted)]">
              Complete operational buildouts from founding, securing institutional commitments
            </p>
          </div>
          <div className="forest-card p-8 text-center">
            <div className="text-5xl md:text-6xl font-bold text-[var(--forest)] mb-3">300+</div>
            <div className="text-lg font-semibold text-[var(--grove)] mb-2">Operational Due Diligence Reviews</div>
            <p className="text-sm text-[var(--muted)]">
              We know what allocators look for—we've been on both sides of the table
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 md:py-16">
        <div className="forest-card p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--grove)]">
            The Challenge Emerging Managers Face
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
            You need institutional-quality operations to secure allocator commitments. But traditional solutions—enterprise platforms, bundled vendor packages, Big 4 auditors—are priced for established firms with hundreds of millions in AUM.
          </p>
          <p className="text-lg text-[var(--ink)] leading-relaxed">
            <strong className="text-[var(--grove)]">We solve this with intelligent architecture:</strong> modular vendor selection, AI-enhanced workflows, and operational design informed by 300+ due diligence reviews. You get institutional credibility that passes allocator scrutiny—at 60% of traditional costs.
          </p>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[var(--grove)]">
          How We Deliver Institutional Quality at 60% Cost
        </h2>
        <p className="text-center text-lg text-[var(--muted)] mb-12 max-w-3xl mx-auto">
          Smart vendor selection and modular architecture that scales with your growth
        </p>

        <div className="space-y-8">
          {/* Modular Vendor Architecture */}
          <div className="forest-card p-8 border-l-4 border-[var(--forest)]">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🎯</span>
              <h3 className="text-2xl font-bold text-[var(--grove)]">Modular Vendor Architecture</h3>
            </div>
            <div className="ml-12">
              <p className="text-[var(--muted)] mb-3">
                <strong className="text-[var(--ink)]">Traditional approach:</strong> Bundled packages lock you into expensive enterprise pricing from day one
              </p>
              <p className="text-[var(--muted)] mb-4">
                <strong className="text-[var(--ink)]">Our approach:</strong> Best-of-breed components that integrate seamlessly—pay for what you need, when you need it
              </p>
              <div className="bg-[#f0f7f0] dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
                <p className="text-sm text-[var(--grove)] font-semibold">
                  Real Example: Athena OMS + General Risk Advisors factor feeds = real-time risk analytics at one-third the cost of bundled admin-risk packages
                </p>
              </div>
            </div>
          </div>

          {/* Smart Audit & Service Provider Selection */}
          <div className="forest-card p-8 border-l-4 border-[var(--forest)]">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">✅</span>
              <h3 className="text-2xl font-bold text-[var(--grove)]">Smart Audit & Service Provider Selection</h3>
            </div>
            <div className="ml-12">
              <p className="text-[var(--muted)] mb-3">
                <strong className="text-[var(--ink)]">Traditional approach:</strong> Big 4 audit firms command premium pricing for emerging managers
              </p>
              <p className="text-[var(--muted)] mb-4">
                <strong className="text-[var(--ink)]">Our approach:</strong> Top-tier regional firms (BDO, Grant Thornton) deliver same institutional credibility at 60% cost
              </p>
              <div className="bg-[#f0f7f0] dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
                <p className="text-sm text-[var(--grove)] font-semibold">
                  Proven Results: Both funds launched with regional audit firms passed institutional allocator due diligence and secured $150M+ commitments
                </p>
              </div>
            </div>
          </div>

          {/* AI-Enhanced Operations */}
          <div className="forest-card p-8 border-l-4 border-[var(--forest)]">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">🤖</span>
              <h3 className="text-2xl font-bold text-[var(--grove)]">AI-Enhanced Operations</h3>
            </div>
            <div className="ml-12">
              <p className="text-[var(--muted)] mb-3">
                <strong className="text-[var(--ink)]">Traditional approach:</strong> Manual reconciliation, compliance checks, and reporting processes require expensive headcount
              </p>
              <p className="text-[var(--muted)] mb-4">
                <strong className="text-[var(--ink)]">Our approach:</strong> Python/AI-assisted workflows automate routine tasks—you get systematic verification without the operational overhead
              </p>
              <div className="bg-[#f0f7f0] dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
                <p className="text-sm text-[var(--grove)] font-semibold">
                  Technology Edge: OpenAI-powered reconciliation platform, vector database analysis, automated SEC filing reviews—enterprise capabilities at startup scale
                </p>
              </div>
            </div>
          </div>

          {/* Allocator-Informed Design */}
          <div className="forest-card p-8 border-l-4 border-[var(--forest)]">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">📋</span>
              <h3 className="text-2xl font-bold text-[var(--grove)]">Allocator-Informed Design</h3>
            </div>
            <div className="ml-12">
              <p className="text-[var(--muted)] mb-3">
                <strong className="text-[var(--ink)]">Traditional consultants:</strong> Generic best practices that may miss what allocators actually scrutinize
              </p>
              <p className="text-[var(--muted)] mb-4">
                <strong className="text-[var(--ink)]">Our advantage:</strong> 300+ operational due diligence reviews from the allocator's side—we know exactly what passes institutional scrutiny
              </p>
              <div className="bg-[#f0f7f0] dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
                <p className="text-sm text-[var(--grove)] font-semibold">
                  Direct Experience: Built policy stacks, compliance frameworks, and audit trails that passed ODD from endowments, pension plans, and institutional allocators
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--grove)]">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fund Launch Infrastructure */}
          <div className="forest-card p-6">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-3 text-[var(--grove)]">Fund Launch Infrastructure</h3>
            <p className="text-[var(--muted)] mb-4">
              Complete operational buildouts: SEC registration, vendor stack design, compliance frameworks, and policy documentation that passes institutional ODD
            </p>
          </div>

          {/* Reconciliation Automation */}
          <div className="forest-card p-6">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3 text-[var(--grove)]">Reconciliation Automation</h3>
            <p className="text-[var(--muted)] mb-4">
              AI-assisted reconciliation platform using OpenAI and vector databases—systematic verification replacing manual processes
            </p>
          </div>

          {/* Allocator Readiness */}
          <div className="forest-card p-6">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-3 text-[var(--grove)]">Allocator Readiness</h3>
            <p className="text-[var(--muted)] mb-4">
              Policy stacks, audit prep, and diligence workflows informed by 300+ ODD reviews—we know what allocators look for
            </p>
          </div>

          {/* Vendor Stack Optimization */}
          <div className="forest-card p-6">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-3 text-[var(--grove)]">Vendor Stack Optimization</h3>
            <p className="text-[var(--muted)] mb-4">
              Modular OMS, admin, and risk integrations delivering institutional capability at mid-market pricing
            </p>
          </div>

          {/* CFO/COO Services */}
          <div className="forest-card p-6">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-[var(--grove)]">CFO/COO Services</h3>
            <p className="text-[var(--muted)] mb-4">
              Interim executive support including controller services, OMS oversight, and multi-system reporting integration
            </p>
          </div>

          {/* AI-Enhanced Operations */}
          <div className="forest-card p-6">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-[var(--grove)]">AI-Enhanced Operations</h3>
            <p className="text-[var(--muted)] mb-4">
              Compliance automation, SEC filing analysis, and prompt-based workflows with staged review processes
            </p>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--grove)]">
          Track Record: Zero to Institutional Commitments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Merewether Investment Management */}
          <div className="forest-card p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🚀</span>
              <div>
                <h3 className="text-2xl font-bold text-[var(--grove)] mb-2">
                  Merewether Investment Management
                </h3>
                <div className="flex gap-2 mb-3">
                  <span className="forest-badge text-xs">$0 → $175M AUM</span>
                  <span className="forest-badge text-xs">2018-2021</span>
                </div>
              </div>
            </div>
            <p className="text-[var(--muted)] mb-4">
              Built complete operational infrastructure from founding. Secured $150M commitment from leading endowment by demonstrating institutional-grade operations.
            </p>
            <div className="bg-[#f0f7f0] dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)] space-y-2">
              <p className="text-sm font-semibold text-[var(--grove)]">Cost Optimization:</p>
              <p className="text-sm text-[var(--muted)]">• Athena OMS + General Risk Advisors vs bundled packages: 67% savings</p>
              <p className="text-sm text-[var(--muted)]">• BDO audit vs Big 4: 60% savings</p>
              <p className="text-sm font-semibold text-[var(--grove)] mt-3">Result:</p>
              <p className="text-sm text-[var(--muted)]">Passed institutional ODD, secured $150M</p>
            </div>
          </div>

          {/* Kiski Partners */}
          <div className="forest-card p-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🎯</span>
              <div>
                <h3 className="text-2xl font-bold text-[var(--grove)] mb-2">
                  Kiski Partners
                </h3>
                <div className="flex gap-2 mb-3">
                  <span className="forest-badge text-xs">$200M Allocation</span>
                  <span className="forest-badge text-xs">2014-2015</span>
                </div>
              </div>
            </div>
            <p className="text-[var(--muted)] mb-4">
              Zero-to-launch build supporting $200M institutional allocation. Created complete policy stack, risk infrastructure, and diligence workflows meeting allocator requirements.
            </p>
            <div className="bg-[#f0f7f0] dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)] space-y-2">
              <p className="text-sm font-semibold text-[var(--grove)]">Infrastructure:</p>
              <p className="text-sm text-[var(--muted)]">• Enfusion OMS integration</p>
              <p className="text-sm text-[var(--muted)]">• Citco fund administration</p>
              <p className="text-sm text-[var(--muted)]">• Cayman Fund-of-One structure</p>
              <p className="text-sm font-semibold text-[var(--grove)] mt-3">Result:</p>
              <p className="text-sm text-[var(--muted)]">Passed institutional ODD, launched $200M</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16">
        <div className="forest-card p-10 md:p-12 text-center bg-gradient-to-br from-[#e8f5e8] to-[#f0f7f0] dark:from-[#0f1511] dark:to-[#0f1410]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--grove)]">
            Ready to Build Institutional-Grade Infrastructure?
          </h2>
          <p className="text-lg text-[var(--muted)] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you pass allocator due diligence and secure institutional commitments—without enterprise overhead.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://calendly.com/chris-groveline"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
            >
              Schedule Discovery Call
            </a>
            <Link
              href="/case-studies"
              className="inline-block px-8 py-4 text-lg rounded-2xl bg-white dark:bg-[var(--panel)] text-[#1d3a22] dark:text-[var(--ink)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors"
            >
              View Case Studies
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-10 pt-8 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--muted)] mb-3">
              <strong className="text-[var(--grove)]">Chris Hainlen</strong> • Investment Operations Infrastructure
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-[var(--muted)]">
              <a href="mailto:chris@groveline.ai" className="hover:text-[var(--forest)] transition-colors">
                chris@groveline.ai
              </a>
              <span>•</span>
              <a href="tel:903-605-6399" className="hover:text-[var(--forest)] transition-colors">
                903-605-6399
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/chainlen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--forest)] transition-colors"
              >
                linkedin.com/in/chainlen
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
