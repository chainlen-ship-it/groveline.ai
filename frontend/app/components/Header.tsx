import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-[#101410]/75 border-b border-[var(--border)] shadow-sm">
      <div className="max-w-[1120px] mx-auto px-4 md:px-0 flex items-center gap-3 md:gap-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Groveline-G.png"
            alt="Groveline"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <Link
            href="/assessment2"
            className="px-3 py-2 rounded-lg hover:bg-forest-sage/15 transition-colors text-sm md:text-base font-semibold text-[var(--forest)]"
          >
            Complimentary Assessment
          </Link>
          <Link
            href="/case-studies"
            className="px-3 py-2 rounded-lg hover:bg-forest-sage/15 transition-colors text-sm md:text-base"
          >
            Case Studies
          </Link>
          <a
            href="https://outlook.office.com/bookwithme/user/1a049f8f31714e3e8efdf1ab744ed4d3@groveline.ai/meetingtype/guwMtq7wYkSN_8DLpJ5j3Q2?anonymous&ismsaljsauthenabled&ep=mlink"
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
