import React from 'react';
import { Link } from 'react-router-dom';
import heroSectionImg from './assets/heroSection.png';

export default function LandingPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="bg-surface font-label-mono text-[14px] w-full z-50 py-6">
        <div className="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto">
          <div className="font-headline-md text-[28px] font-bold text-primary tracking-tighter">
            ClubStock
          </div>
          <nav className="hidden md:flex gap-12 font-medium">
            <a className="text-primary hover:text-on-surface-variant transition-colors border-b border-primary pb-1" href="#">Clubs</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Materials</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Logistics</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Archives</a>
          </nav>
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/login" className="text-on-surface hover:text-primary transition-colors font-medium">
              Login
            </Link>
            <button className="bg-accent-green text-white px-6 py-2 font-medium tracking-wide">
              BORROW
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop pt-16 pb-32">
          <h1 className="font-display-xl text-[130px] leading-[1] text-primary font-bold mb-20 tracking-tighter max-w-[1100px] uppercase">
            THE UNIVERSITY RESOURCE POOL
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 relative">
              <img alt="Equipment Inventory" className="w-full h-auto object-cover" src={heroSectionImg} />

            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="font-body-lg text-on-surface-variant mb-16 leading-relaxed">
                A centralized, meticulously curated system for managing, borrowing, and tracking materials across all student organizations. Designed for clarity, built for scale.
              </p>
              <div className="flex flex-col gap-8 mb-16">
                <div className="border-b border-outline-variant/30 pb-6">
                  <span className="text-[11px] font-label-mono text-on-surface-variant block mb-2">01</span>
                  <h3 className="font-headline-md text-primary font-bold text-[32px]">Seamless Borrowing</h3>
                </div>
                <div className="border-b border-outline-variant/30 pb-6">
                  <span className="text-[11px] font-label-mono text-on-surface-variant block mb-2">02</span>
                  <h3 className="font-headline-md text-primary font-bold text-[32px]">Club Logistics Simplified</h3>
                </div>
              </div>
              <div>
                <button className="bg-accent-green text-white px-8 py-4 font-body-md font-semibold flex items-center gap-3 hover:bg-accent-green/90 transition-colors">
                  Explore Catalogue <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="border-y border-outline-variant/30 bg-surface py-24">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex justify-between items-end mb-10 border-b border-outline-variant/30 pb-4">
              <h2 className="font-display-xl text-[64px] leading-none text-primary font-bold uppercase tracking-tighter">System Metrics</h2>
              <a className="font-label-caps text-label-caps text-primary uppercase hover:text-surface-tint transition-colors font-semibold" href="#">View Full Report</a>
            </div>
            <div className="border border-outline-variant/30 flex flex-col md:flex-row h-full">
              <div className="p-12 border-b md:border-b-0 md:border-r border-outline-variant/30 flex-1 bg-white">
                <div className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-16">Active Assets</div>
                <div className="font-display-xl text-[140px] leading-none font-bold text-primary mb-6 tracking-tighter">1,204</div>
                <div className="font-body-md text-on-surface-variant">Currently available for dispatch.</div>
              </div>
              <div className="flex-1 flex flex-col bg-surface-container-low">
                <div className="flex-1 p-12 border-b border-outline-variant/30 flex justify-between">
                  <div className="w-1/2 pr-6">
                    <div className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-16">Participating Clubs</div>
                    <div className="font-display-xl text-[80px] leading-none font-bold text-primary tracking-tighter">48</div>
                  </div>
                  <div className="w-1/2 pl-6 border-l border-outline-variant/30">
                    <div className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-widest mb-16">Successful Loans</div>
                    <div className="font-display-xl text-[80px] leading-none font-bold text-primary tracking-tighter">8.4k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface font-label-caps text-[11px] text-on-surface uppercase tracking-widest w-full mt-auto">
        <div className="py-24 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-end gap-16">
          <div className="w-full md:w-1/3">
            <div className="font-headline-md text-[28px] font-bold text-primary mb-4 tracking-tighter">
              CLUBSTOCK
            </div>
            <p className="text-on-surface-variant leading-relaxed normal-case tracking-normal text-[14px]">
              © 2024 ClubStock Materials System. All rights<br />reserved.
            </p>
          </div>
          <div className="flex gap-12 font-medium">
            <a className="text-on-surface hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-on-surface hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-on-surface hover:text-primary transition-colors" href="#">University Guidelines</a>
            <a className="text-on-surface hover:text-primary transition-colors" href="#">Contact Admin</a>
            <a className="text-on-surface hover:text-primary transition-colors" href="#">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
