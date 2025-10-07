import Link from "next/link";

export const metadata = {
  title: "Institutional vs Pragmatic Launches – Groveline.ai",
  description: "Lessons from building allocator-ready systems for both institutional-grade and founder-led funds",
};

export default function InstitutionalVsPragmaticCaseStudy() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-0 py-12">
      <Link href="/case-studies" className="text-forest hover:underline mb-6 inline-block">
        ← Back to Case Studies
      </Link>

      <div className="forest-card p-8 md:p-12 mb-8">
        <span className="forest-badge mb-4">Strategy</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--grove)]">
          Case Study: Institutional vs Pragmatic Launches
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Lessons from building allocator-ready systems for both institutional-grade and founder-led funds
        </p>
      </div>

      <div className="space-y-8">
        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Context</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Two launches I helped build show opposite approaches: one demanded
            institutional-grade infrastructure from day one, the other prioritized
            pragmatism and speed. Both succeeded, but with different trade-offs.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="forest-card p-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">
              Institutional Build
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Every detail was designed for allocator standards — policies,
              compliance, systems. Allocators gained confidence quickly, but the
              team felt the weight of over-engineering and slower progress.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">Characteristics:</h3>
              <ul className="list-disc list-inside text-sm text-[var(--muted)] space-y-1">
                <li>Full compliance infrastructure from day one</li>
                <li>Enterprise-grade systems and policies</li>
                <li>Slower initial progress</li>
                <li>High allocator confidence early</li>
                <li>Higher upfront costs</li>
              </ul>
            </div>
          </section>

          <section className="forest-card p-8 border-l-4 border-green-500">
            <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">
              Pragmatic Build
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              The founder-driven launch focused on "allocator-ready enough."
              Lightweight systems and policies supported fundraising without
              unnecessary drag. The fund scaled later with added polish.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold mb-2 text-green-700 dark:text-green-400">Characteristics:</h3>
              <ul className="list-disc list-inside text-sm text-[var(--muted)] space-y-1">
                <li>Minimum viable compliance framework</li>
                <li>Lightweight, scalable systems</li>
                <li>Faster time to market</li>
                <li>Incremental polish as needed</li>
                <li>Lower initial investment</li>
              </ul>
            </div>
          </section>
        </div>

        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">The Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-3 px-4 font-semibold">Aspect</th>
                  <th className="py-3 px-4 font-semibold text-blue-700 dark:text-blue-400">Institutional</th>
                  <th className="py-3 px-4 font-semibold text-green-700 dark:text-green-400">Pragmatic</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted)]">
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Launch Timeline</td>
                  <td className="py-3 px-4">9-12 months</td>
                  <td className="py-3 px-4">3-6 months</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Initial Investment</td>
                  <td className="py-3 px-4">$150M+ commitment</td>
                  <td className="py-3 px-4">$200M+ over time</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Team Velocity</td>
                  <td className="py-3 px-4">Slower, methodical</td>
                  <td className="py-3 px-4">Fast, iterative</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Allocator Readiness</td>
                  <td className="py-3 px-4">Immediate</td>
                  <td className="py-3 px-4">Progressive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="forest-card p-8 bg-gradient-to-br from-forest-mist to-forest-morning dark:from-[#0f1410] dark:to-[#0f1511]">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Takeaway</h2>
          <p className="text-[var(--ink)] dark:text-[var(--ink)] leading-relaxed text-lg mb-4">
            Allocator credibility requires rigor, but momentum requires pragmatism.
            Groveline helps managers strike the right balance — institutional
            where it matters, lean where it helps.
          </p>
          <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-[var(--border)]">
            <p className="text-sm text-[var(--grove)] font-semibold">
              The Sweet Spot: Build allocator-ready operations with realistic budgets,
              then scale infrastructure as commitments grow.
            </p>
          </div>
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
