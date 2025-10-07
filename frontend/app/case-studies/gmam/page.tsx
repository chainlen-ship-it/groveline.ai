import Link from "next/link";

export const metadata = {
  title: "GMAM Trade Approval System — Groveline.ai",
  description: "How SQL + Excel eliminated paper-based trade approvals at a $100B pension fund — and what it taught me about the dangers of over-policy",
};

export default function GMAMCaseStudy() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-0 py-12">
      <Link href="/case-studies" className="text-forest hover:underline mb-6 inline-block">
        ← Back to Case Studies
      </Link>

      <div className="forest-card p-8 md:p-12 mb-8">
        <span className="forest-badge mb-4">Operational Risk</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--grove)]">
          The Day We Stopped Chasing Paper at GMAM
        </h1>
        <p className="text-lg text-[var(--muted)]">
          How I taught myself SQL, built a trade approval system with Excel as the front-end, 
          and learned that you can absolutely overdo it on the policy front
        </p>
      </div>

      <div className="space-y-8">
        
        {/* Context - The Irony */}
        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Context: The Bell Curve Problem</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            By the time I joined GMAM, I'd reviewed hundreds of funds for operational due diligence at Crestline. 
            Most were <strong className="text-[var(--grove)]">under-policied</strong> — light on controls, 
            light on documentation, hoping to slide through.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Then I got to GMAM. A <strong className="text-[var(--grove)]">$100B pension fund</strong>. Invested in some 
            of the biggest funds in the world. Regulated by the SEC, subject to SOX, internal audit, the whole nine yards.
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            <strong className="text-[var(--grove)]">And they were on the opposite end of the bell curve.</strong> 
            Over-policied. Managing to committee. Policies that created massive operational burden while trying 
            to mitigate risk. You <em>can</em> overdo it on the policy front.
          </p>
        </section>

        {/* The Problem */}
        <section className="forest-card p-8 bg-gradient-to-br from-[#fff8f0] to-[#ffe8d5] dark:from-[#1a0f05] dark:to-[#0f0805]">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">The Problem: Good Policy, Broken Execution</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            There was a standing policy: <strong>Portfolio Managers must review all trading activity.</strong>
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Good control in theory. But there was no system to support it. PMs didn't have access to a portfolio 
            management system, and budget constraints meant they wouldn't get one.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            <strong className="text-[var(--grove)]">So traders printed trades and walked them to PMs for signatures.</strong>
          </p>
          
          <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-[var(--border)] font-mono text-sm mb-4">
            State Street Trades → Printed Reports → Trader Desk → PM Initials → Risk Files
          </div>
          
          <div className="space-y-2 text-[var(--muted)]">
            <div>❌ Stacks of paper, every day</div>
            <div>❌ No tracking of approvals</div>
            <div>❌ Zero transparency</div>
            <div>❌ Real risk that trades could slip through</div>
            <div>❌ PMs couldn't engage meaningfully with this volume</div>
          </div>

          <div className="mt-6 p-4 bg-red-50/50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-800">
            <p className="text-[var(--muted)] italic">
              "The SEC will have a problem if you say you're doing something and you aren't actually doing it. 
              This policy existed on paper, but the workflow was fundamentally broken."
            </p>
          </div>
        </section>

        {/* The Solution - The Journey */}
        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">The Solution: Teaching Myself SQL (Again)</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            At BBT Capital Management (my first job out of college), I taught myself VBA to automate reconciliations. 
            Reduced manual workload by 90%. Transformed option expiration from a multi-person, multi-hour effort 
            into a one-hour solo task.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            At Crestline, I worked <em>with</em> developers on the Ledgex portfolio management system. Learned 
            how professionals built production systems. Saw what good architecture looked like.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            <strong className="text-[var(--grove)]">At GMAM, I didn't need the developers.</strong> I taught myself SQL 
            (YouTube + help from a colleague in risk). Built the entire workflow from scratch using tools we already had.
          </p>

          <div className="bg-[#f0f7f0] dark:bg-[#0f1410] p-6 rounded-lg border border-[var(--border)] mb-6">
            <h3 className="font-semibold mb-3 text-[var(--grove)]">What I Built:</h3>
            <div className="space-y-3 text-sm text-[var(--muted)]">
              <div className="flex items-start gap-2">
                <span className="text-[var(--forest)] font-bold">1.</span>
                <span><strong>Nightly FTP import</strong> from State Street (fund administrator) into SQL Server</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--forest)] font-bold">2.</span>
                <span><strong>SQL database</strong> with proper keys, versioning, and audit logging — built myself</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--forest)] font-bold">3.</span>
                <span><strong>Automated email alerts</strong> to PMs when trades needed approval</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--forest)] font-bold">4.</span>
                <span><strong>Excel VBA front-end</strong> — PMs were comfortable with Excel, so Excel became the interface</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--forest)] font-bold">5.</span>
                <span><strong>Approvals written back to database</strong> — fully auditable, fully digital, SOX-compliant</span>
              </div>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-[var(--border)] font-mono text-sm mb-6">
            Admin FTP → SQL DB → Email Alerts → Excel Interface → Approve → Logged in DB ✓
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-600 dark:text-blue-500">
              <strong className="text-blue-700 dark:text-blue-400">The ingenuity:</strong> Using Excel as the front-end. 
              This wasn't a limitation — it was a feature. PMs knew Excel. They trusted Excel. The SQL database 
              did the heavy lifting behind the scenes. No expensive portfolio management system required.
            </p>
          </div>
        </section>

        {/* Impact */}
        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Impact</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <div className="font-bold text-green-700 dark:text-green-400 mb-1">✓ Paper stacks disappeared</div>
              <div className="text-sm text-green-600 dark:text-green-500">
                Traders no longer walked around with printed trade blotters
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="font-bold text-blue-700 dark:text-blue-400 mb-1">✓ PMs engaged meaningfully</div>
              <div className="text-sm text-blue-600 dark:text-blue-500">
                Could see trades with context: sectors, weightings, risk exposures
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="font-bold text-purple-700 dark:text-purple-400 mb-1">✓ Complete audit trail</div>
              <div className="text-sm text-purple-600 dark:text-purple-500">
                SQL database logs ready for internal audit, SOX compliance, SEC examination
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="font-bold text-orange-700 dark:text-orange-400 mb-1">✓ Policy finally worked</div>
              <div className="text-sm text-orange-600 dark:text-orange-500">
                Without grinding the team. Simple, inexpensive, effective. Actually adopted.
              </div>
            </div>
          </div>
          
          <p className="text-[var(--muted)] leading-relaxed">
            The policy was respected. The workflow was functional. Risk added value — not just documentation.
          </p>
        </section>

        {/* The Lesson - Policy vs. Execution */}
        <section className="forest-card p-8 bg-gradient-to-br from-[#e8f5e8] to-[#f0f7f0] dark:from-[#0f1511] dark:to-[#0f1410]">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">The Lesson: Think About What You're Actually Doing</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Most funds I reviewed were under-policied. GMAM was over-policied. Both are problems.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            <strong className="text-[var(--grove)]">You need to think about what you're actually doing.</strong> A policy 
            that creates massive operational burden while trying to mitigate risk isn't helping anyone. And the SEC 
            will absolutely have a problem if you say you're doing something and you're not.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            This experience directly informed the compliance automation tools I build now at Groveline:
          </p>

          <div className="bg-white/50 dark:bg-black/20 p-5 rounded-lg border border-[var(--border)]">
            <h3 className="font-semibold mb-3 text-[var(--grove)]">Compliance Tools That Actually Work:</h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>• Extract tasks from compliance manual automatically</li>
              <li>• Email meeting notes to attendees — all they do is click "I attended"</li>
              <li>• Document evidence that you're doing what you say you're doing</li>
              <li>• Make policies functional, not just documented</li>
            </ul>
          </div>
        </section>

        {/* Takeaway */}
        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Takeaway</h2>
          <div className="text-lg text-[var(--muted)] leading-relaxed space-y-4">
            <p>
              <strong className="text-[var(--grove)]">Learn the tools yourself.</strong> VBA at BBT. SQL at GMAM. 
              Python and AI now. You don't always need a development team if you're willing to figure it out.
            </p>
            <p>
              <strong className="text-[var(--grove)]">Use what you have.</strong> Excel as a front-end wasn't a compromise — 
              it was smart. PMs knew it, trusted it, adopted it. The database did the real work in the background.
            </p>
            <p>
              <strong className="text-[var(--grove)]">Policies need execution.</strong> It doesn't matter how good 
              your compliance manual looks if the workflow is broken. Build systems that make policies <em>work</em>, 
              not just exist.
            </p>
          </div>
        </section>

        {/* LinkedIn Post Link */}
        <section className="forest-card p-8 bg-gradient-to-br from-[#e8f0ff] to-[#f0f5ff] dark:from-[#0a0f15] dark:to-[#0f1015]">
          <h2 className="text-xl font-bold mb-4 text-[var(--grove)]">Read the Original Story</h2>
          <p className="text-[var(--muted)] mb-4">
            This case study was originally shared on LinkedIn, where it resonated with operations professionals 
            facing similar challenges.
          </p>
          
            href="https://www.linkedin.com/feed/update/urn:li:share:7379930665003307008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 rounded-2xl bg-[#0077b5] text-white font-semibold hover:bg-[#006399] transition-colors"
          >
            View LinkedIn Post →
          </a>
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