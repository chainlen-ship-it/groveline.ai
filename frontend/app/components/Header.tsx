import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-[#101410]/75 border-b border-[var(--border)] shadow-sm">
      <div className="max-w-[1120px] mx-auto px-4 md:px-0 flex items-center gap-3 md:gap-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Logo_01.png"
            alt="Groveline"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <Link
            href="/case-studies"
            className="px-3 py-2 rounded-lg hover:bg-forest-sage/15 transition-colors text-sm md:text-base"
          >
            Case Studies
          </Link>
          <a
            href="mailto:chris.hainlen@gmail.com?subject=Consulting%20Inquiry"
            className="px-3 py-2 rounded-lg hover:bg-forest-sage/15 transition-colors text-sm md:text-base"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/chainlen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg hover:bg-forest-sage/15 transition-colors text-sm md:text-base"
          >
            LinkedIn
          </a>
          <a
            href="https://calendly.com/chris-groveline"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg bg-forest hover:bg-forest-dark text-white transition-colors text-sm md:text-base font-semibold"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
