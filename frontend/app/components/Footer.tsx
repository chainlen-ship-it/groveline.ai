import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 text-center text-[#466a4d] dark:text-[var(--muted)] border-t border-[var(--border)] mt-16">
      <div className="max-w-[1120px] mx-auto px-4">
        <Image
          src="/assets/Logo_01.png"
          alt="Groveline"
          width={120}
          height={40}
          className="mx-auto mb-6 opacity-90"
          style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.25))' }}
        />
        <div className="space-y-2 text-sm md:text-base">
          <div>
            Need help? Email <a href="mailto:hello@groveline.ai" className="hover:underline">hello@groveline.ai</a>. We usually reply within one business day.
          </div>
          <div>Dallas, Texas • <a
              href="https://www.linkedin.com/in/chainlen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/chainlen
            </a>
          </div>
        </div>
        <div className="mt-6 text-xs md:text-sm">
          <a href="/privacy" className="hover:underline opacity-75 hover:opacity-100">Privacy Policy</a>
          <span className="mx-2 opacity-50">•</span>
          <a href="/terms" className="hover:underline opacity-75 hover:opacity-100">Terms &amp; Conditions</a>
        </div>
        <div className="mt-4 text-xs md:text-sm opacity-75">
          © 2025 Groveline Advisor Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
