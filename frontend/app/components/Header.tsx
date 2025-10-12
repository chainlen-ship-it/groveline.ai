'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <div className="ml-auto flex items-center gap-3">
          {/* Book a Call Button - Always visible */}
          <a
            href="https://outlook.office.com/bookwithme/user/1a049f8f31714e3e8efdf1ab744ed4d3@groveline.ai/meetingtype/guwMtq7wYkSN_8DLpJ5j3Q2?anonymous&ismsaljsauthenabled&ep=mlink"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg bg-forest hover:bg-forest-dark text-white transition-colors text-sm md:text-base font-semibold"
          >
            Book a Call
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg border border-[var(--border)] hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className="h-0.5 w-full bg-[var(--ink)] rounded-full"></span>
              <span className="h-0.5 w-full bg-[var(--ink)] rounded-full"></span>
              <span className="h-0.5 w-full bg-[var(--ink)] rounded-full"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute right-4 top-16 w-64 bg-white dark:bg-[var(--panel)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-2">
            <Link
              href="/assessment"
              className="block px-4 py-3 hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors text-[var(--ink)] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Complimentary Assessment
            </Link>
            <Link
              href="/case-studies"
              className="block px-4 py-3 hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors text-[var(--ink)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>

            {/* Separator */}
            <div className="my-2 border-t border-[var(--border)]"></div>

            <Link
              href="/login"
              className="block px-4 py-3 hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors text-[var(--grove)] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}
