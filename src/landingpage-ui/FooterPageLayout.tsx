import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function FooterPageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#161616] flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]/8 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-[20px] tracking-tight">
              Studiqs<sup className="text-[10px] ml-[1px]">®</sup>
            </span>
            <span className="opacity-70 text-lg">✳︎</span>
          </Link>
          <Link
            to="/"
            className="text-[14px] font-medium border border-[#1a1a1a]/30 hover:bg-[#1a1a1a] hover:text-white rounded-full px-5 py-1.5 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-[900px] px-6 sm:px-10">
          <div className="border-b border-[#1a1a1a]/8 pb-8 mb-12">
            <h1 className="font-display text-[36px] sm:text-[48px] leading-tight tracking-tight text-[#161616]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[#c97a3a] font-medium">
                {subtitle}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#161616] text-[#efeadd]/60 border-t border-white/5 py-8 text-center text-[12px]">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Studiqs. All rights reserved.</span>
          <Link to="/" className="hover:text-white transition">
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}
