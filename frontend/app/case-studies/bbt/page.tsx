import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "BBT Option Expiry Automation – Groveline.ai",
  description: "Automated option expiry workflow that reduced a 5-person job to a 1-hour solo process",
};

export default function BBTCaseStudy() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-0 py-12">
      <Link href="/case-studies" className="text-forest hover:underline mb-6 inline-block">
        ← Back to Case Studies
      </Link>

      <div className="forest-card p-8 md:p-12 mb-8">
        <span className="forest-badge mb-4">Automation</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--grove)]">
          Case Study: BBT – Option Expiry Automation
        </h1>
        <p className="text-lg text-[var(--muted)]">
          From a five-person job to a one-hour solo workflow
        </p>
      </div>

      <div className="space-y-8">
        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Context</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Option expiry used to be a five-person job at BBT — manual entries,
            late nights, and lots of pizza. The process was inefficient and prone
            to error.
          </p>
          <div className="mt-6">
            <Image
              src="/assets/pizza.jpg"
              alt="Late night pizza during option expiry"
              width={600}
              height={400}
              className="rounded-lg border border-[var(--border)] w-full max-w-md mx-auto"
            />
            <p className="text-sm text-center text-[var(--muted)] mt-2">
              The old way: late nights and lots of pizza
            </p>
          </div>
        </section>

        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">What We Did</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Mapped the workflow and automated with a lightweight process:
            OMS export → Excel parse → Bloomberg prices → ITM/OTM + edge flags.
          </p>
          <div className="bg-forest-mist dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
            <h3 className="font-semibold mb-2 text-[var(--grove)]">Automation Workflow:</h3>
            <ul className="list-disc list-inside text-sm text-[var(--muted)] space-y-1">
              <li>Automated OMS data export</li>
              <li>Excel parsing and data transformation</li>
              <li>Bloomberg price integration</li>
              <li>ITM/OTM calculation with edge case flagging</li>
              <li>Automated position updates</li>
            </ul>
          </div>
        </section>

        <section className="forest-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Result</h2>
          <p className="text-[var(--muted)] leading-relaxed">
            The grind became a one-hour solo flow and saved thousands of hours
            over the years. It even survived later OCC changes with a quick tweak
            because it followed the business logic instead of locking into one
            rigid tool.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <div className="text-2xl font-bold text-red-700 dark:text-red-400">5 people</div>
              <div className="text-sm text-red-600 dark:text-red-500">Before</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <div className="text-2xl font-bold text-green-700 dark:text-green-400">1 hour</div>
              <div className="text-sm text-green-600 dark:text-green-500">After</div>
            </div>
          </div>
        </section>

        <section className="forest-card p-8 bg-gradient-to-br from-forest-mist to-forest-morning dark:from-[#0f1410] dark:to-[#0f1511]">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Takeaway</h2>
          <p className="text-[var(--ink)] dark:text-[var(--ink)] leading-relaxed text-lg">
            Great is often the enemy of good. Simple, resilient solutions provide
            lasting value and let teams focus on higher-value work.
          </p>
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
